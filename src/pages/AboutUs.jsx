import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const team = [
    {
      id: 1,
      name: 'Name with position',
      image: '/team/member1.jpg',
    },
    {
      id: 2,
      name: 'Name with position',
      image: '/team/member2.jpg',
    },
    {
      id: 3,
      name: 'Name with position',
      image: '/team/member3.jpg',
    }
  ];

  return (
    <div className="about-page">
      {/* Our Team Section */}
      <section className="our-team-section">
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
              <p className="team-name">{member.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="vision-section">
        <h1>Our Vision</h1>
        <p className="vision-text">
          We have a vision to be the best in providing total solutions in furniture and interiors to our clientele, with an aim to enhance their own perceptions on functional and innovative design. We envision designs that elevate their living and working environment, in a way that only we can do.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section">
        <h1>Our Mission</h1>
        <p className="mission-text">
          We have a vision to be the best in providing total solutions in furniture and interiors to our clientele, with an aim to enhance their own perceptions on functional and innovative design. We envision designs that elevate their living and working environment, in a way that only we can do.
        </p>
      </section>

      {/* Company Profile Section */}
      <section className="company-profile-section">
        <h1>Company Profile</h1>
        <ul className="profile-list">
          <li>Corporate Name : Vihara Furniture</li>
          <li>Type of Business :  Interior Designers and Furniture Manufacturers/ Supplier</li>
          <li>Company Registration No. : PV 12345</li>
          <li>Business address : #41, Dutugamunu Street, Pamankada, Kohuwala.</li>
          <li>Contact Numbers : +0728326219 / +0774856392­6</li>
          <li>Forest Department Registration No. : TD /3220/ A</li>
          <li>Registered under Forest Ordinance (Chapter 451) as amended by act no.13 of 1996</li>
          <li>Affiliated Bankers : Seylan Bank PLC, Hatton National Bank PLC, Nations Trust Bank PLC</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
