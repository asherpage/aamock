
import './App.css';
import Navbar from './components/Navbar';
import './styles/home.css'
import openingcar from './styles/images/openingcar.png'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <div className="background-image" />
      <div className="openingcar">
        <img src={openingcar} />
      </div>
      <div className="content">
        <h1>Simplify car transport with <span>A&A Ship</span></h1>
        <h3>Experience seamless vehicle transportation with our trusted car transport services, ensuring reliable and efficient delivery to your desired destination.</h3>
        {/* <div className='button-group'>
          <button className='opener-button'>1</button>
          <button className='opener-button'>2</button>
        </div> */}
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
  <button>Button</button>
</div>
    </div>
    <div className='our-steps'></div>
    </>
  );
}

export default App;
