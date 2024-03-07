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
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
      <div className="auth">
        <a href="#">Sign Up</a>
        <a href="#">Sign In</a>
      </div>
    </div>
  );
}

export default Navbar;
