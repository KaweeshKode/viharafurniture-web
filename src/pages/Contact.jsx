import { useState } from 'react';
import { FaPhone, FaEnvelope, FaHome, FaCheckCircle, FaSpinner, FaFacebookF } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });

  const [submissionState, setSubmissionState] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setSubmissionState({
      isLoading: true,
      isSuccess: false,
      isError: false,
      message: ''
    });

    // Simulate API call
    setTimeout(() => {
      try {
        // Handle form submission here (e.g., send to API)
        console.log('Form submitted:', formData);
        
        // Set success state
        setSubmissionState({
          isLoading: false,
          isSuccess: true,
          isError: false,
          message: 'Thank you for contacting us! We will get back to you soon.'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          mobile: '',
          subject: '',
          message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmissionState(prev => ({ ...prev, isSuccess: false }));
        }, 5000);
      } catch (error) {
        // Set error state
        setSubmissionState({
          isLoading: false,
          isSuccess: false,
          isError: true,
          message: 'Something went wrong. Please try again.'
        });
      }
    }, 1500);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="page-header">
          <h1 className="contact-title">Let's Get in touch</h1>
          <p className="contact-tagline">We're here to help bring your furniture dreams to life</p>
        </div>

        <div className="info-cards">
          <div className="info-card">
            <div className="card-icon">
              <FaPhone />
            </div>
            <p className="card-text">
              0757161759<br />
              0767536087
            </p>
          </div>

          <div className="info-card">
            <div className="card-icon">
              <FaEnvelope />
            </div>
            <p className="card-text">viharafurniture11@gmail.com</p>
          </div>

          <div className="info-card">
            <div className="card-icon">
              <FaHome />
            </div>
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

          <div className="form-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number *</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="button-container">
                <button type="submit" className="submit-btn" disabled={submissionState.isLoading}>
                  {submissionState.isLoading ? (
                    <>
                      <FaSpinner className="spinner-icon" />
                      Sending...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Success Message */}
          {submissionState.isSuccess && (
            <div className="success-message">
              <FaCheckCircle className="success-icon" />
              <p>{submissionState.message}</p>
            </div>
          )}

          {/* Error Message */}
          {submissionState.isError && (
            <div className="error-message">
              <p>{submissionState.message}</p>
            </div>
          )}
        </div>

        {/* Social Media Links */}
        <div className="social-media-section">
          <h3 className="social-title">Follow Us</h3>
          <p className="social-subtitle">Stay connected for the latest designs and offers</p>
          <div className="social-links">
            <a 
              href="https://www.facebook.com/viharafurniture" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link facebook"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF />
            </a>
            <a 
              href="https://www.tiktok.com/@viharafurniture" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link tiktok"
              aria-label="Visit our TikTok page"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

