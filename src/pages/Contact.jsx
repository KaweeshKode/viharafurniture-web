import { useState } from 'react';
import { FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API)
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="contact-title">Let's Get in touch</h1>

        <div className="info-cards">
          <div className="info-card">
            <FaPhone className="card-icon" />
            <p className="card-text">+0773899284</p>
          </div>

          <div className="info-card">
            <FaEnvelope className="card-icon" />
            <p className="card-text">viharafurniture@gmail.com</p>
          </div>

          <div className="info-card">
            <FaHome className="card-icon" />
            <p className="card-text">
              No. 51/B, S De S<br />
              Jayasinghe<br />
              Mawataha,<br />
              Kohuwala.
            </p>
          </div>
        </div>

        <div className="map-section">
          <div className="map-placeholder">
            <h2>Map</h2>
          </div>
        </div>

        <div className="form-section">
          <h2 className="form-title">Contact Us</h2>
          <p className="form-subtitle">Fill this out so that we can learn more about your requirements.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="button-container">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

