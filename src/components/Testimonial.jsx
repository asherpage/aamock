import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import './Testimonial.css'; // Import CSS file for styling (you can create this file with your desired styles)

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false); // State for triggering animation

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      job: 'CEO, Company A',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      job: 'CTO, Company B',
      comment:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      job: 'Marketing Manager, Company C',
      comment:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 4,
      name: 'Bob Williams',
      job: 'Designer, Company D',
      comment:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      id: 5,
      name: 'Emily Brown',
      job: 'Developer, Company E',
      comment:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
  ];

  const nextTestimonial = () => {
    setAnimate(true); // Trigger animation
    setTimeout(() => setAnimate(false), 1000); // Disable animation after 1s
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const prevTestimonial = () => {
    setAnimate(true); // Trigger animation
    setTimeout(() => setAnimate(false), 1000); // Disable animation after 1s
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <div className="testimonials-container">
      <div className="prev-button" onClick={prevTestimonial}>
        <FaArrowLeft />
      </div>
      <div className="testimonial-card">
        <div className={`testimonial-content ${animate ? 'animate' : ''}`}>
          <div className='widthcen'><div className='picture'></div></div>
          
                    <p className="testimonial-name">{testimonials[currentIndex].name}</p>
                    <div className="stars">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className={index < 3 ? 'star-filled' : ''} />
            ))}
          </div>
          <p className="testimonial-comment">"{testimonials[currentIndex].comment}"</p>
          <p className="testimonial-job">{testimonials[currentIndex].job}</p>
        </div>
      </div>
      <div className="next-button" onClick={nextTestimonial}>
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Testimonials;
