import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Header from "./components/Header"; // Correct path
import HeroSection from "./components/HeroSection"; // Correct path
import ServiceSection from "./components/ServiceSection"; // Correct path
import Blog from "./components/Blog"; // Moved inside src/components
import Contact from "./components/ContactUs"; // Moved inside src/components
import Footer from "./components/Footer"; // Correct path
import Logo from "./components/Logo"; // Correct path

import "./App.css";

function App() {
  const [change, setChange] = useState("Services");

  return (
    <div className="App">
      <Header logo={<Logo />} setChange={setChange} />
      <HeroSection setChange={setChange}>Our best services</HeroSection>

      {change === "Blog" ? (
        <Blog />
      ) : change === "Services" ? (
        <ServiceSection />
      ) : change === "Contact" ? (
        <Contact />
      ) : (
        <ServiceSection />
      )}
      <Footer logo={<Logo />} />
    </div>
  );
}

export default App;
