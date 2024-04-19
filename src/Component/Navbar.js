// Navbar.js
import React from 'react';
import Logo from "../Assets/Logo.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-content">
        <h3>Ecom Website | Admin Panel</h3>
      </div>
    </nav>
  );
}

export default Navbar;
