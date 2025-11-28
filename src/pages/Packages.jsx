import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa"; // Make sure you have react-icons installed
import "./Packages.css";

const Packages = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Expanded data with furniture items for the modal
  const packages = [
    {
      id: 1,
      name: "Traditional Sri Lankan",
      description:
        "Experience the heritage of Ceylon with intricate wood carvings and warm tones.",
      details:
        "This package includes fully customizable wood finishes (Teak, Mahogany, or Mara) and traditional cushion patterns.",
      image: "/public/packages/traditional-srilankan.png",
      furnitureItems: [
        { name: "Carved Sofa", img: "/products/sofa.png" },
        { name: "Coffee Table", img: "/products/sofa.png" },
        { name: "Veranda Chair", img: "/products/sofa.png" },
        { name: "Display Cabinet", img: "/products/sofa.png" },
        { name: "Wall Art", img: "/products/sofa.png" },
      ],
    },
    {
      id: 2,
      name: "Modern White",
      description:
        "Clean lines and minimalist aesthetics for the contemporary home.",
      details:
        "Includes stain-resistant fabrics and modular designs that can be rearranged to fit any room size.",
      image: "/public/packages/modern-white.png",
      furnitureItems: [
        { name: "Sectional Sofa", img: "/products/sofa.png" },
        { name: "Glass Table", img: "/products/sofa.png" },
        { name: "Rug", img: "/products/sofa.png" },
        { name: "Floor Lamp", img: "/products/sofa.png" },
        { name: "TV Unit", img: "/products/sofa.png" },
      ],
    },
    {
      id: 3,
      name: "Luxury Golden",
      description:
        "Opulence and grandeur with premium gold accents and velvet textures.",
      details:
        "Features imported velvet fabrics, gold-leaf plating options, and handcrafted detailing.",
      image: "/public/packages/luxury-golden.png",
      furnitureItems: [
        { name: "Royal Sofa", img: "/products/sofa.png" },
        { name: "Chandelier", img: "/products/sofa.png" },
        { name: "Side Table", img: "/products/sofa.png" },
        { name: "Mirror", img: "/products/sofa.png" },
        { name: "Console", img: "/products/sofa.png" },
      ],
    },
  ];

  const handleBookSession = () => {
    navigate("/booking");
  };

  return (
    <div className="packages-page">
      <div className="packages-header-section">
        <h1>Sri Lanka's #1 Furniture Brand</h1>
        <p className="packages-subtitle">
          In Sri Lanka First time we have introduced the furniture packages for
          you customize your home based on our ideas.
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
                    e.target.src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="350"%3E%3Crect width="400" height="350" fill="%23E8DCC8"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="18" fill="%238B7355"%3E' +
                      encodeURIComponent(pkg.name) +
                      "%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div className="package-content">
                <div className="package-text">
                  <h2>{pkg.name}</h2>
                  <p>{pkg.description}</p>
                </div>
                <button
                  className="view-btn"
                  onClick={() => setSelectedPackage(pkg)}
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL POPUP --- */}
      {selectedPackage && (
        <div className="modal-overlay" onClick={() => setSelectedPackage(null)}>
          <div className="package-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal-btn"
              onClick={() => setSelectedPackage(null)}
            >
              <FaTimes />
            </button>

            <div className="modal-header-grid">
              <div className="modal-main-image">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  onError={(e) => {
                    e.target.style.background = "#ccc";
                    e.target.style.display = "block";
                  }}
                />
                <span className="img-caption">Image of the package</span>
              </div>

              <div className="modal-info">
                <h2>{selectedPackage.name}</h2>
                <div className="modal-description-box">
                  <p>{selectedPackage.description}</p>
                </div>
              </div>
            </div>

            <div className="modal-furniture-section">
              <h3>Furniture's of the package</h3>
              <div className="furniture-scroll-container">
                {selectedPackage.furnitureItems.map((item, index) => (
                  <div key={index} className="furniture-item-box">
                    <div className="furn-img-placeholder">
                      {/* Using placeholder logic for furniture items */}
                      <span>{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-details-section">
              <p>{selectedPackage.details}</p>
              <span className="details-caption">
                Details about the customizations of the package.
              </span>
            </div>

            <div className="modal-action">
              <button
                className="book-session-btn-modal"
                onClick={handleBookSession}
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;
