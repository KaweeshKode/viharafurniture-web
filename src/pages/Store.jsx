import React, { useState, useEffect } from "react";
import "./Store.css";

const Store = () => {
  const [sortBy, setSortBy] = useState("popularity");
  const [filters, setFilters] = useState({
    color: [],
    material: [],
    availability: [],
    priceMin: "",
    priceMax: "",
  });

  // --- CART STATE ---
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("viharaCart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  // --- CHECKOUT STATE ---
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState("form"); // 'form', 'processing', 'success'
  const [cardDetails, setCardDetails] = useState({
    number: "",
    holder: "",
    expiry: "",
    cvc: "",
  });
  const [cardType, setCardType] = useState("unknown"); // 'visa', 'mastercard', 'unknown'

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem("viharaCart", JSON.stringify(cart));
  }, [cart]);

  // Card Detection Logic
  useEffect(() => {
    const num = cardDetails.number.replace(/\D/g, "");
    if (num.startsWith("4")) {
      setCardType("visa");
    } else if (/^5[1-5]/.test(num) || /^2[2-7]/.test(num)) {
      setCardType("mastercard");
    } else {
      setCardType("unknown");
    }
  }, [cardDetails.number]);

  const handleCardInput = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 16) value = value.slice(0, 16);
    setCardDetails({ ...cardDetails, number: value });
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setCheckoutStep("processing");

    // Simulate payment processing
    setTimeout(() => {
      setCheckoutStep("success");
      setCart([]); // Clear cart
      localStorage.removeItem("viharaCart");
    }, 2000);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
    setCheckoutStep("form");
    setCardDetails({ number: "", holder: "", expiry: "", cvc: "" });
  };

  // Sample products
  const products = [
    {
      id: 1,
      name: "Velvet Sofa",
      price: 45000,
      image: "/public/products/sofa.png",
      category: "Sofa",
    },
    {
      id: 2,
      name: "L-Shape Modern",
      price: 85000,
      image: "/public/products/sofa.png",
      category: "Sofa",
    },
    {
      id: 3,
      name: "Classic Recliner",
      price: 62000,
      image: "/public/products/sofa.png",
      category: "Sofa",
    },
    {
      id: 4,
      name: "Wooden Loveseat",
      price: 35000,
      image: "/public/products/sofa.png",
      category: "Sofa",
    },
    {
      id: 5,
      name: "Office Chair",
      price: 25000,
      image: "/public/products/sofa.png",
      category: "Chair",
    },
    {
      id: 6,
      name: "Dining Set",
      price: 120000,
      image: "/public/products/sofa.png",
      category: "Dining",
    },
    {
      id: 7,
      name: "Bed Frame",
      price: 95000,
      image: "/public/products/sofa.png",
      category: "Bed",
    },
    {
      id: 8,
      name: "Storage Unit",
      price: 18000,
      image: "/public/products/sofa.png",
      category: "Storage",
    },
  ];

  // --- CART FUNCTIONS ---
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      })
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="store-page">
      <div className="store-header-section">
        <h1>Sri Lanka's #1 Furniture Brand</h1>
      </div>

      {/* --- CART BUTTON --- */}
      <button className="cart-float-btn" onClick={() => setIsCartOpen(true)}>
        <span className="icon">🛒</span>
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </button>

      {/* --- CART SIDEBAR --- */}
      <div
        className={`cart-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      ></div>
      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Your Cart ({totalItems})</h2>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>
            ✕
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-icon">🛒</span>
              <p>Your cart is empty.</p>
              <button
                className="start-shopping"
                onClick={() => setIsCartOpen(false)}
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-img">
                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23E8DCC8"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="12" fill="%238B7355"%3EIMG%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="cart-item-price">
                    LKR {item.price.toLocaleString()}
                  </p>
                  <div className="cart-controls">
                    <button onClick={() => updateQuantity(item.id, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>LKR {calculateTotal().toLocaleString()}</span>
            </div>
            <button
              className="checkout-btn"
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {/* --- CHECKOUT MODAL --- */}
      {isCheckoutOpen && (
        <div className="checkout-modal-overlay">
          <div className="checkout-modal">
            <button className="close-checkout" onClick={closeCheckout}>
              ✕
            </button>

            {checkoutStep === "form" && (
              <div className="checkout-form-container">
                <h2>Secure Checkout</h2>
                <div className="order-summary-mini">
                  <p>Total Amount to Pay</p>
                  <h3>LKR {calculateTotal().toLocaleString()}</h3>
                </div>

                <form onSubmit={handleCheckoutSubmit}>
                  <div className="form-group">
                    <label>Card Number</label>
                    <div className="card-input-wrapper">
                      <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={cardDetails.number}
                        onChange={handleCardInput}
                        required
                        maxLength="16"
                      />
                      <div className="card-type-icon">
                        {cardType === "visa" && (
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                            alt="Visa"
                          />
                        )}
                        {cardType === "mastercard" && (
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                            alt="Mastercard"
                          />
                        )}
                        {cardType === "unknown" && (
                          <span className="generic-card">💳</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={cardDetails.holder}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          holder: e.target.value,
                        })
                      }
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            expiry: e.target.value,
                          })
                        }
                        required
                        maxLength="5"
                      />
                    </div>
                    <div className="form-group">
                      <label>CVC</label>
                      <input
                        type="password"
                        placeholder="123"
                        value={cardDetails.cvc}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            cvc: e.target.value,
                          })
                        }
                        required
                        maxLength="3"
                      />
                    </div>
                  </div>

                  <button type="submit" className="pay-now-btn">
                    Pay LKR {calculateTotal().toLocaleString()}
                  </button>
                </form>
              </div>
            )}

            {checkoutStep === "processing" && (
              <div className="checkout-processing">
                <div className="spinner"></div>
                <p>Processing Payment...</p>
              </div>
            )}

            {checkoutStep === "success" && (
              <div className="checkout-success">
                <div className="checkmark-circle">
                  <div className="background"></div>
                  <div className="checkmark draw"></div>
                </div>
                <h2>Payment Successful!</h2>
                <p>Thank you for your purchase.</p>
                <button className="back-to-store-btn" onClick={closeCheckout}>
                  Continue Shopping
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- MAIN STORE CONTENT --- */}
      <div className="store-container">
        <aside className="store-sidebar">
          <h2>Filter By</h2>
          <div className="filter-section">
            <button className="filter-header">
              <span>Color</span>
              <span className="arrow">▼</span>
            </button>
          </div>
          <div className="filter-section">
            <button className="filter-header">
              <span>Material</span>
              <span className="arrow">▼</span>
            </button>
          </div>
          <div className="filter-section">
            <button className="filter-header">
              <span>Availability</span>
              <span className="arrow">▼</span>
            </button>
          </div>
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
                  onChange={(e) =>
                    setFilters({ ...filters, priceMin: e.target.value })
                  }
                />
              </div>
              <div className="price-input-group">
                <label htmlFor="price-max">Max</label>
                <input
                  type="text"
                  id="price-max"
                  placeholder="Max"
                  value={filters.priceMax}
                  onChange={(e) =>
                    setFilters({ ...filters, priceMax: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        </aside>

        <div className="store-content">
          <div className="sort-section">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-dropdown"
            >
              <option value="popularity">Sort by popularity ▼</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
              <option value="latest">Sort by latest</option>
            </select>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.target.src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23F5F0E8"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="24" fill="%238B7355"%3E' +
                        encodeURIComponent(product.name) +
                        "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-price">
                    LKR {product.price.toLocaleString()}
                  </p>
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
