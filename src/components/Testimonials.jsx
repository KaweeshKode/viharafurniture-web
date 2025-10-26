import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Saman Perera",
      text: "I recently purchased a sofa from Vihara Furniture, and I'm extremely happy with my purchase. The sofa is fantastic, and the quality is top-notch. I highly recommend it!"
    },
    {
      id: 2,
      name: "Nimal Frenando",
      text: "I recently purchased a sofa from Vihara Furniture, and I'm extremely happy with my purchase. The sofa is fantastic, and the quality is top-notch. I highly recommend it!"
    },
    {
      id: 3,
      name: "Kamal Arachchige",
      text: "I recently purchased a sofa from Vihara Furniture, and I'm extremely happy with my purchase. The sofa is fantastic, and the quality is top-notch. I highly recommend it!"
    }
  ];

  return (
    <section className="testimonials">
      <h2 className="section-title">The Trust We've Earned</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-header">
              <FaUserCircle className="user-icon" />
              <h3>{testimonial.name}</h3>
            </div>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
