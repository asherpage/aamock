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
        <a href="./">Home</a>
        <a href="./Contact">Contact</a>
        <a href="./Application">Careers</a>
      </div>
      <div className="auth">
        <a href="./Signup">Sign Up</a>
        <a href="./Login" id='blue-signup'>Login</a>
      </div>
    </div>
  );
}

export default Navbar;
