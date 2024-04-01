import React from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonial.css'; // Import your CSS file

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris malesuada risus quis neque condimentum, vel consectetur justo efficitur.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      review: 'Sed consectetur lectus a odio vehicula, quis sollicitudin mauris faucibus. Duis id felis ac purus vestibulum vestibulum.',
      rating: 4
    },
    {
      id: 3,
      name: 'Alice Johnson',
      review: 'Praesent tincidunt felis at elit faucibus, eget euismod est aliquet. Ut consectetur turpis vel neque commodo tristique.',
      rating: 5
    },
    {
      id: 4,
      name: 'Michael Brown',
      review: 'Vestibulum auctor turpis a massa vestibulum, ac molestie elit venenatis. Nam id bibendum nisl. Nullam mattis, nunc nec suscipit eleifend, ipsum elit lacie.',
      rating: 4
    }
  ];

  return (
    <div className="testimonial-container">
      <div className='center'>
      <h3 id='saying'>Our Contact</h3>
      <h1 id='sayingmain'>Testimonials</h1>
      </div>
      <div className="testimonial-cards">
        {testimonials.map(testimonial => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, index) => (
                <FaStar key={index} className="star-icon" />
              ))}
            </div>
            <h2>{testimonial.name}</h2>
            <p>{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
