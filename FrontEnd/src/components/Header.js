import React from "react";
import Logo from "./Logo";

function Header({ setChange }) {
  return (
    <header className="header">
      <TopBar />
      <BottBar setChange={setChange} />
    </header>
  );
}

function TopBar() {
  return (
    <div className="top-header">
      <div className="container">
        <Logo />
        <button className="nav-btn">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div className="contact">
          <div className="col">
            <img src="1.png" alt="phone" />
            <span>
              Number : <br />
              <b>+880123456789</b>
            </span>
          </div>

          <div className="col">
            <img src="2.png" alt="email" />
            <span>
              Email : <br />
              <b>Mukti@gmail.com</b>
            </span>
          </div>

          <div className="col">
            <img src="3.png" alt="address" />
            <span>
              Address : <br />
              <b>12 North West New York</b>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottBar({ setChange }) {
  return (
    <div className="bottom-nav">
      <div className="container">
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="departments.html">Departments</a>
          </li>
          <li>
            <a href="doctors.html">Doctors</a>
          </li>
          <li>
            <button onClick={() => setChange("Services")} className="nav-link">
              Services
            </button>
          </li>
          <li>
            <button onClick={() => setChange("Blog")} className="nav-link">
              Blog
            </button>
          </li>
          <li>
            <a href="about-us.html">About us</a>
          </li>
          <li>
            <button onClick={() => setChange("Contact")} className="nav-link">
              Contact Us
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
