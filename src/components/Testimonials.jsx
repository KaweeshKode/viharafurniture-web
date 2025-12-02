import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Saman Perera",
      text: "From consultation to delivery, the experience was seamless. The custom wardrobe fits perfectly and the craftsmanship is outstanding. Worth every rupee!"
    },
    {
      id: 2,
      name: "Nimal Frenando",
      text: "We upgraded our living room with their modern sofa set. Comfortable, elegant, and very durable. The team was friendly and on time too. Highly recommended!"
    },
    {
      id: 3,
      name: "Kamal Arachchige",
      text: "Excellent service and attention to detail. The dining table finish is superb and matches our interior perfectly. Will definitely order again."
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
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
      </div>
    </section>
  );
};

export default Testimonials;
