import React from "react";
import "../style/HeroSection.css";

function HeroSection({ children, setChange }) {
  return (
    <div className="main-header">
      <div className="container">
        <h1 className="main-title">{children}</h1>
        <div className="breadcrumbs">
          <a href="index.html">Home</a> -{/* Change this anchor to a button */}
          <button
            className="active" // Optionally, you can style this to look like a link
            onClick={() => setChange("Services")}
            style={{
              background: "none",
              border: "none",
              color: "blue",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Services
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
