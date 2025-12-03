import React from 'react';
import { FaEye, FaBullseye, FaBuilding, FaBriefcase, FaIdCard, FaMapMarkerAlt, FaPhone, FaTree, FaGavel, FaUniversity } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  const team = [
    {
      id: 1,
      name: 'R.M.Nilantha Rupasingha',
      position: 'Owner & Founder',
      image: '/team/male-avatar.png',
    },
    {
      id: 2,
      name: 'K.A.Sarasi Lakmini',
      position: 'Marketing (Facebook & TikTok)',
      image: '/team/female-avatar.png',
    },
    {
      id: 3,
      name: 'Tharu Samaraweera',
      position: 'Designer & Consultation',
      image: '/team/female-avatar.png',
    }
  ];

  return (
    <div className="about-page">
      {/* Our Team Section */}
      <section className="our-team-section">
        <div className="team-container">
          <h1>Our Team</h1>
          <div className="team-grid">
            {team.map(member => (
              <div key={member.id} className="team-member">
                <div className="team-avatar">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="vision-section">
        <div className="vision-container">
          <div className="vision-card">
            <div className="section-icon vision-icon">
              <FaEye />
            </div>
            <h1>Our Vision</h1>
            <p className="vision-text">
              To be Sri Lanka's leading furniture brand, recognized for exceptional craftsmanship and innovative design. We envision creating timeless pieces that transform living and working spaces, bringing joy and comfort to every home we touch.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-card">
            <div className="section-icon mission-icon">
              <FaBullseye />
            </div>
            <h1>Our Mission</h1>
            <p className="mission-text">
              To provide personalized furniture solutions with superior quality and attention to detail. We are committed to understanding our clients' unique needs, delivering custom designs that reflect their style, and ensuring complete satisfaction through expert consultation and reliable service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="company-profile-section">
        <div className="profile-container">
          <h1>Company Profile</h1>
          <div className="profile-grid">
            <div className="profile-card">
              <div className="profile-icon">
                <FaBuilding />
              </div>
              <h3>Corporate Name</h3>
              <p>Vihara Furniture</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">
                <FaBriefcase />
              </div>
              <h3>Type of Business</h3>
              <p>Interior Designers and Furniture Manufacturers/ Supplier</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">
                <FaIdCard />
              </div>
              <h3>Company Registration No.</h3>
              <p>PV 12345</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Business Address</h3>
              <p>No.108/C/1, Aluthgama, Bogamuwa, Yakkala.</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">
                <FaPhone />
              </div>
              <h3>Contact Numbers</h3>
              <p>0757161759 / 0767536087</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">
                <FaTree />
              </div>
              <h3>Forest Department Registration No.</h3>
              <p>TD /3220/ A</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">
                <FaGavel />
              </div>
              <h3>Legal Registration</h3>
              <p>Registered under Forest Ordinance (Chapter 451) as amended by act no.13 of 1996</p>
            </div>
            <div className="profile-card">
              <div className="profile-icon">
                <FaUniversity />
              </div>
              <h3>Affiliated Bankers</h3>
              <p>Seylan Bank PLC, Hatton National Bank PLC, Nations Trust Bank PLC</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
