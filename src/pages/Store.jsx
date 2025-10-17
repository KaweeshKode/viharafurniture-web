import React, { useState } from 'react';
import './Store.css';

const Store = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const [filters, setFilters] = useState({
    color: [],
    material: [],
    availability: [],
    priceMin: '',
    priceMax: ''
  });

  // Sample products - all sofas for now matching your screenshot
  const products = [
    {
      id: 1,
      name: 'Sofa',
      price: '0.00',
      image: '/products/sofa1.jpg',
    },
    {
      id: 2,
      name: 'Sofa',
      price: '0.00',
      image: '/products/sofa2.jpg',
    },
    {
      id: 3,
      name: 'Sofa',
      price: '0.00',
      image: '/products/sofa3.jpg',
    },
    {
      id: 4,
      name: 'Sofa',
      price: '0.00',
      image: '/products/sofa4.jpg',
    },
    {
      id: 5,
      name: 'Sofa',
      price: '0.00',
      image: '/products/sofa5.jpg',
    },
    {
      id: 6,
      name: 'Sofa',
      price: '0.00',
      image: '/products/sofa6.jpg',
    },
    {
      id: 7,
      name: 'Sofa',
      price: '0.00',
      image: '/products/sofa7.jpg',
    },
    {
      id: 8,
      name: 'Sofa',
      price: '0.00',
      image: '/products/sofa8.jpg',
    },
  ];

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="store-page">
      <div className="store-header-section">
        <h1>Sri Lanka's #1 Furniture Brand</h1>
      </div>

      <div className="store-container">
        <aside className="store-sidebar">
          <h2>Filter By</h2>
          
          {/* Color Filter */}
          <div className="filter-section">
            <button className="filter-header">
              <span>Color</span>
              <span className="arrow">▼</span>
            </button>
          </div>

          {/* Material Filter */}
          <div className="filter-section">
            <button className="filter-header">
              <span>Material</span>
              <span className="arrow">▼</span>
            </button>
          </div>

          {/* Availability Filter */}
          <div className="filter-section">
            <button className="filter-header">
              <span>Availability</span>
              <span className="arrow">▼</span>
            </button>
          </div>

          {/* Price Filter */}
          <div className="filter-section price-filter">
            <button className="filter-header">
              <span>Price</span>
              <span className="arrow">▼</span>
            </button>
            <div className="price-inputs">
              <div className="price-input-group">
                <label htmlFor="price-min">Min</label>
                <input 
                  type="text" 
                  id="price-min"
                  placeholder="Min"
                  value={filters.priceMin}
                  onChange={(e) => setFilters({...filters, priceMin: e.target.value})}
                />
              </div>
              <div className="price-input-group">
                <label htmlFor="price-max">Max</label>
                <input 
                  type="text" 
                  id="price-max"
                  placeholder="Max"
                  value={filters.priceMax}
                  onChange={(e) => setFilters({...filters, priceMax: e.target.value})}
                />
              </div>
            </div>
          </div>
        </aside>

        <div className="store-content">
          <div className="sort-section">
            <select value={sortBy} onChange={handleSortChange} className="sort-dropdown">
              <option value="popularity">Sort by popularity ▼</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
              <option value="latest">Sort by latest</option>
            </select>
          </div>

          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23F5F0E8"/%3E%3Cimage href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'200\'%3E%3Crect width=\'300\' height=\'200\' fill=\'%23D4A574\'/%3E%3C/svg%3E" x="50" y="50" width="300" height="200"/%3E%3C/svg%3E';
                    }} 
                  />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
