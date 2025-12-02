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
            <p className="card-text">
              0757161759<br />
              0767536087
            </p>
          </div>

          <div className="info-card">
            <FaEnvelope className="card-icon" />
            <p className="card-text">viharafurniture11@gmail.com</p>
          </div>

          <div className="info-card">
            <FaHome className="card-icon" />
            <p className="card-text">
              No.108/C/1,<br />
              Aluthgama,<br />
              Bogamuwa,<br />
              Yakkala<br />
              Sri Lanka
            </p>
          </div>
        </div>

        <div className="map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3448!2d80.0344!3d7.0867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDUnMTIuMSJOIDgwwrAwMicwMy44IkU!5e0!3m2!1sen!2slk!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Vihara Furniture Location"
          ></iframe>
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

