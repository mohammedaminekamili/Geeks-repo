import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Lifecycle method to catch errors
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div className="alert alert-danger m-5" role="alert">
          <h2>An error has occured.</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;