import React from 'react';
import './Footer.css'; // Import your CSS file
import log from '../styles/images/Logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="footer-column-container">
            <div className="footer-column">
              <h4 className="footer-heading">Home</h4>
              <p className="footer-link">Why us</p>
              <p className="footer-link">about</p>
              <p className="footer-link">Testimonials</p>
              <p className="footer-link">process</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Contact</h4>
              <p className="footer-link">Forums</p>
              <p className="footer-link">Phone</p>
              <p className="footer-link">Email</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Application</h4>
              <p className="footer-link">Careers</p>
              <p className="footer-link">Positions</p>
              <p className="footer-link">Why Apply</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">About</h4>
              <p className="footer-link">Our Story</p>
              <p className="footer-link">Partners</p>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Socials</h4>
              <FaFacebookSquare className='ic' />
              <FaTwitter className='ic' />
              <RiInstagramFill className='ic' />
              <p>
                <i className="fab fa-twitter" style={{ color: '#ffffff' }}></i>
                <i className="fab fa-facebook-square" style={{ color: '#ffffff' }}></i>
                <i className="fab fa-instagram" style={{ color: '#ffffff' }}></i>
                <i className="fab fa-github" style={{ color: '#ffffff' }}></i>
              </p>
            </div>
          </div>
        </div>
        <div className="footer-bottom-container">
          <div className="footer-bottom-box">
            <div className="footer-extra">
              <h1>Visit <span>A&A Corporation</span> not-for-profit parent, the <span>A&A Foundation</span>.
                  Portions of this content are ©1998–2023 by individual <span>A&ATransport.com</span> contributors. Content available under a Creative
                  Commons license.</h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
