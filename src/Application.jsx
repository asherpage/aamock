import React, { useState, useEffect } from 'react';
import './styles/home.css';
import { IoIosCheckmarkCircle } from "react-icons/io";
import Navbar from './components/Navbar';
import ban from './styles/images/how-to-ship-a-car-to-another-state.png'
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function Application() {
  return (
    <>
    <div className='baller'></div>
    <Navbar />
    <div className="banner-containerski">
  <div className="benefit-container">
    <div className="feature-box">
      <h1>A&A Opportunities</h1>
      <ul>
        <li>
          
          <h2><IoIosCheckmarkCircle className='bullet'/>Expertise & Reliability</h2>
          <p>Join a team known for its expertise and reliability in handling car transportation, fostering a sense of pride in being part of a reputable company that ensures clients' vehicles arrive safely and on time.</p>
        </li>
        <li>
          <h2><IoIosCheckmarkCircle className='bullet'/>Career Growth & Rewards</h2>
          <p>Discover ample opportunities for career growth, skill development, and competitive rewards, fostering a workplace environment where dedication and expertise are recognized and rewarded.</p>
        </li>
        <li>
          <h2><IoIosCheckmarkCircle className='bullet'/>Culture</h2>
          <p>Become part of a supportive team culture that values collaboration, respect, and growth, where employees are encouraged to contribute ideas and skills towards collective success.</p>
        </li>
      </ul>
      <br />
    </div>
  </div>
  <div className="form-container">
    <div className="form-wrapper">
      <h1>Application form</h1>
    </div>
    <h2>Full Name</h2>
    <input type="text" className="input-name" id="fullName"></input>
    <h2>Birth Date (Must Be 18 Years Of Age)</h2>
    <input type="date" className="input-date" id="birthDate"></input>
    <h2>Email</h2>
    <input type="text" className="input-email" id="email"></input>
    <h2>Phone</h2>
    <input type="text" className="input-phone" id="phoneNumber"></input>
    <h2>Any Special Qualifications/Previous training</h2>
    <textarea type="text" id="specialQualifications" className="input-special"></textarea>
    <h2>Positions</h2>
    <select className="select-pos" id="positions">
      <option value="select" id="select" disabled selected>[Select One]</option>
      <option value="Carrier">Carrier</option>
      <option value="Driver">Driver</option>
      <option value="Coordinator">Coordinator</option>
    </select>
    <p>Ensure that all required fields are filled out accurately and completely. Double-check for any typos or errors to enhance your chances of consideration.</p>
    <button className="submit-btnapp" disabled>Submit Application</button>
  </div>
</div>

</>
  )
}

export default Application