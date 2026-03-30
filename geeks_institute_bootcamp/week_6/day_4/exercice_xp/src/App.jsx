import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";

// --- Step 6: Functional Components ---

const HomeScreen = () => (
  <div className="container mt-4">
    <h1>Home Screen</h1>
  </div>
);

const ProfileScreen = () => (
  <div className="container mt-4">
    <h1>Profile Screen</h1>
  </div>
);

const ShopScreen = () => {
  // Step 6: Throw an error intentionally
  throw new Error("The Shop is currently broken!");
};

function App() {
  return (
    <BrowserRouter>
      {/* Step 5: Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
            <NavLink className="nav-link" to="/shop">Shop</NavLink>
          </div>
        </div>
      </nav>

      {/* Step 7 & 8: Routes wrapped with ErrorBoundary */}
      <Routes>
        <Route 
          path="/" 
          element={
            <ErrorBoundary><HomeScreen /></ErrorBoundary>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ErrorBoundary><ProfileScreen /></ErrorBoundary>
          } 
        />
        <Route 
          path="/shop" 
          element={
            <ErrorBoundary><ShopScreen /></ErrorBoundary>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
