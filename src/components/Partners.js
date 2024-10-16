import React from "react";
import "./Partners.css";
const Partners = () => {
  const partners = [
    "logo1.png",
    "logo2.png",
    "logo3.png",
    "logo4.png",
    // Add more logos as needed
  ];

  return (
    <section class="about-imgs">
      <div class="container">
        <div class="imgs">
          <img src="/about/1.png" alt="" />
          <img src="/about/2.png" alt="" />
          <img src="/about/3.png" alt="" />
          <img src="/about/4.png" alt="" />
          <img src="/about/5.png" alt="" />
          <img src="/about/2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
