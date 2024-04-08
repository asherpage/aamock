
import './App.css';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
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
import carro from "./styles/images/wriz.jpg"
import keys from "./styles/images/step_2_final-992x1024.jpg"
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
    <div className='flex-cont'>
      <div className='the-text'>
        <h1>Get An Instant Quote</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro a cupiditate necessitatibus incidunt explicabo assumenda ducimus tempore, reprehenderit fugit labore totam, id, praesentium minima minus impedit placeat doloremque modi? Natus ad ab hic, fugiat quasi, magni similique, neque distinctio dolorum placeat rerum corporis a impedit. Vero atque sit commodi! <span>Read More.</span></h5>
        <button className='opener-button'>Get Quote</button>
      </div>
      <div className='imagyo'>
        <img src={carro}></img>
      </div>
    </div>
    <div className='flex-cont rev'>
      <div className='the-text'>
        <h1>Get An Instant Quote</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident porro a cupiditate necessitatibus incidunt explicabo assumenda ducimus tempore, reprehenderit fugit labore totam, id, praesentium minima minus impedit placeat doloremque modi? Natus ad ab hic, fugiat quasi, magni similique, neque distinctio dolorum placeat rerum corporis a impedit. Vero atque sit commodi! <span>Read More.</span></h5>
        <button className='opener-button'>More Info</button>
      </div>
      <div className='imagyo'>
        <img src={keys}></img>
      </div>
    </div>
    
        
    
    <div className='quote-back'>
          <Testimonial />
  </div>
        {/* <div className="newsletter-banner">
          <h2>Subscribe To Our News</h2>
      <p>Subscribe to our newsletter to get all of our special updates and offers</p>

      <div className="subscribe-form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </div> */}

    <Footer />
    </>
  );
}

export default App;
