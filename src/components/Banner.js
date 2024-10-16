import React from "react";
import "./Banner.css"; // Import the CSS file

const Banner = () => {
  return (
    <div
      className="banner text-center"
      style={{
        backgroundImage: "url(/main-header.jpg)",
        backgroundSize: "cover",
      }}
    >
      <h1>About The Mukti</h1>
    </div>
  );
};

export default Banner;
