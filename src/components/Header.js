import React from "react";
import "./Header.css";
import { useState } from "react";

function Header({ setBlog, logo }) {
  return (
    <header className="header">
      <TopBar logo={logo} />
      <BottBar setBlog={setBlog} />
    </header>
  );
}

function TopBar({ logo }) {
  return (
    <div class="top-header">
      <div class="container">
        <img src="/logo (1).png" alt="" />
        <button class="nav-btn">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="contact">
          <div class="col">
            <img src="/nav/1.png" alt="phone" />
            <span>
              Number : <br />
              <b>+880123456789</b>
            </span>
          </div>

          <div class="col">
            <img src="/nav/2.png" alt="phone" />
            <span>
              Email : <br />
              <b>Mukti@gmail.com</b>
            </span>
          </div>

          <div class="col">
            <img src="/nav/3.png" alt="phone" />
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

function BottBar({ setBlog }) {
  return (
    <div class="bottom-nav">
      <div class="container">
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
            <a href="#" onClick={() => setBlog(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setBlog(true)}>
              Blog
            </a>
          </li>
          <li>
            <a href="about-us.html">About us</a>
          </li>
          <li>
            <a href="Contact-us " onClick={() => setBlog("Contact")}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
