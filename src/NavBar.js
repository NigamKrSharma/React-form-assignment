import React from "react";
import logo from './Assets/Logo.svg'
const NavBar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">Residential</a>
        <a href="#services">
        Commercial & Industrial</a>
        <a href="#contact">Blog</a>
        <a href="#contact">Contact Us</a>
        <a href="#contact">About Us</a>
      </div>
      </nav>
    </div>
  );
};

export default NavBar;
