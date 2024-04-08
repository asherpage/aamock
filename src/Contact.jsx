import React, { useState, useEffect } from 'react';
import './styles/appli.css';
import Navbar from './components/Navbar';
import ban from './styles/images/how-to-ship-a-car-to-another-state.png'
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function BannerHome() {
  return (
    <>
    <div className='over'>
        <Navbar />
    <div className="banner">
      <div className="banner-content">
      </div>
    </div>
    </div>

    <div>
    <div className='contact-main'>
      <div className="contact-container">
            <div className="contact-info">
              <h3>Our Contact</h3>
                <h2>Get In Touch With Us</h2>
                <p id='subtit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolor. Lorem ipsum dolor sit amet.
                </p>
                <div className='linkers'>
                  <div className='address'>
                <h1>Address</h1>
                <p>12471 W Bernard Way, Phx, Arizona</p>
                </div>
                <div className='phoner'>
                <h1>Contact</h1>
                <p>Email: contact@example.com</p>
                <p>Phone: +123456789</p>
                </div>
                </div>
                <h1 className='social'>Follow Us</h1>
                <FaTwitter className='contact-icons'/>
                <FaFacebookSquare className='contact-icons'/>
                <RiInstagramFill className='contact-icons'/>
            </div>
            <div className="contact-form">
                <form action="#" method="POST">
                    <div className="form-group">
                        <label htmlFor="first-name">First Name:</label>
                        <input type="text" id="first-name" name="first-name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Last Name:</label>
                        <input type="text" id="last-name" name="last-name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label><br></br>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label><br></br>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className='contact-submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
    </div>

    </>
  );
}

export default BannerHome;
