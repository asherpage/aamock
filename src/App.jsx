
import './App.css';
import Navbar from './components/Navbar';
import './styles/home.css'
import openingcar from './styles/images/openingcar.png'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function App() {
  return (
    <>
    <div className='bg'>

    
    <Navbar />
    <div className="container">
      
      <div className="openingcar">
        <img src={openingcar} />
    </div>
    </div>
    <div className='mobilecent'>
      <div className="content">
        <h1>Simplify car transport with <span>A&A Ship</span></h1>
        <h3>Experience seamless vehicle transportation with our trusted car transport services, ensuring reliable and efficient delivery to your desired destination.</h3>
        <div className='button-group'>
          <button className='opener-button'>Get in Touch</button>
          <button className='opener-button second'>Options</button>
        </div>
      </div>
      </div>
      <div className="bottom-box">
  <div className="column">
    <div class="location-container">
    <div class="location-marker">
        <HiOutlineLocationMarker className='home-icon' />
    </div>
    <div class="location-info">
              <p>Location</p>
        <h2>Search your location</h2>
    </div>
</div>
  </div>
  <div className="column">
    <div class="location-container">
    <div class="location-marker">
        <FaRegCalendarAlt className='home-icon' />
    </div>
    <div class="location-info">
              <p>Pickup Date</p>
        <h2>Tue, Feb 15th, 11:00AM</h2>
    </div>
</div>
  </div>
  <div className="column">
    <div class="location-container">
    <div class="location-marker">
        <FaRegCalendarAlt className='home-icon' />
    </div>
    <div class="location-info">
              <p>Return Date</p>
        <h2>Fri, Feb 18th, 11:00AM</h2>
    </div>
</div>
  </div>
  <button className='search-button'>Search</button>
</div>
    </div>
    <div className='our-steps'>
      <div className='text-wrap'>
        <h3>ADVANTAGES</h3>
        <h1>Why Choose Us?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam esse temporibus id laudantium nemo quia</p>
      </div>
      <div className="our-container">
      <div className="our-row">
        <div className="our-box">
          <div className="our-content">
            <FaMapMarkedAlt className="our-icon" />
            <h2>Nationwide Coverage</h2>
            <p>We transport vehicles anywhere across the country.</p>
          </div>
        </div>
        <div className="our-box">
          <div className="our-content">
            <FaClock className="our-icon" />
            <h2>Timely Delivery</h2>
            <p>Reliable service ensuring prompt delivery of your vehicles.</p>
          </div>
        </div>
        <div className="our-box">
          <div className="our-content">
            <FaLock className="our-icon" />
            <h2>Secure Transport</h2>
            <p>Your vehicles are handled with utmost care and safety.</p>
          </div>
        </div>
      </div>
      <div className="our-row">
        <div className="our-box">
          <div className="our-content">
            <IoShieldCheckmark className="our-icon" />
            <h2>Fully Insured</h2>
            <p>Peace of mind with comprehensive insurance coverage.</p>
          </div>
        </div>
        <div className="our-box">
          <div className="our-content">
            <IoExtensionPuzzleSharp className="our-icon" />
            <h2>Flexible Options</h2>
            <p>Tailored solutions to meet your specific transportation needs.</p>
          </div>
        </div>
        <div className="our-box">
          <div className="our-content">
            <FaPhone className="our-icon" />
            <h2>Exceptional Customer Service</h2>
            <p>Dedicated support team ensuring a smooth experience 24/7.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
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
    <div className='testimonial-main'>

    </div>
        <div className="newsletter-banner">
          <h2>Subscribe To Our News</h2>
      <p>Subscribe to our newsletter to get all of our special updates and offers</p>
      <div className="subscribe-form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
    </>
  );
}

export default App;
