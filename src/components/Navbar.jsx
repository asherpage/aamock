import React from 'react';
import '../styles/navbar.css'
import logo from '../styles/images/Logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="links">
        <a href="#">Why Choose Us?</a>
        <a href="#">About</a>
        <a href="#">Careers</a>
      </div>
      <div className="auth">
        <a href="#">Sign Up</a>
        <a href="#" id='blue-signup'>Sign In</a>
      </div>
    </div>
  );
}

export default Navbar;
