import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary.jsx";
import Example1 from "./Example1.jsx"
import PostList from "./PostList.jsx"
import Example2 from "./Example2.jsx"
import Example3 from "./Example3.jsx"


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


const postData = async () => {
  const url = "https://webhook.site/24c1a883-0707-445e-ae85-f0b421dbe3ea"; 
  const myData = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myData) 
    });

    console.log("Response Status:", response.status);
    
    const result = await response.text(); 
    console.log("Server Response:", result);
    
    alert("Data sent! Check Webhook.site");
  } catch (error) {
    console.error("Error posting data:", error);
  }
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
            <ErrorBoundary><HomeScreen />
           <PostList/>
           <Example1/>
           <Example2/>
           <Example3/>
            </ErrorBoundary>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ErrorBoundary><ProfileScreen />
            <h1>Post JSON Data Exercise</h1>
      <button 
        className="btn btn-primary" 
        onClick={postData}
      >
        Send Data to Webhook
      </button></ErrorBoundary>
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
