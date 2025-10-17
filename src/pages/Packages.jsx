import React from 'react';
import './Packages.css';

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: 'Traditional Sri Lankan',
      description: 'This is out "Traditional Sri Lankan" package.',
      image: '/packages/traditional.jpg',
    },
    {
      id: 2,
      name: 'Modern White',
      description: 'This is out "Modern White" package.',
      image: '/packages/modern.jpg',
    },
    {
      id: 3,
      name: 'Luxury Golden',
      description: 'This is out "Luxury Golden" package.',
      image: '/packages/luxury.jpg',
    },
  ];

  return (
    <div className="packages-page">
      <div className="packages-header-section">
        <h1>Sri Lanka's #1 Furniture Brand</h1>
        <p className="packages-subtitle">
          In Sri Lanka First time we have introduced the furniture packages for you customize your home based on our ideas.
        </p>
      </div>

      <div className="packages-container">
        <div className="packages-list">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-item">
              <div className="package-image">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="350"%3E%3Crect width="400" height="350" fill="%23E8DCC8"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="18" fill="%238B7355"%3E' + encodeURIComponent(pkg.name) + '%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="package-content">
                <div className="package-text">
                  <h2>{pkg.name}</h2>
                  <p>{pkg.description}</p>
                </div>
                <button className="view-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
