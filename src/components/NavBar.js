import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ onSearch, user, cartItems }) {
  return (
    <nav className="nav">
      <h2 className="logo">OG-CART</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="cart-button">
        <Link to="/cart">
          <button className="cart-btn">
            Cart ({cartItems.length})
          </button>
        </Link>
      </div>
      <div className="user-icon">
        {user && user.icon ? (
          <img src={user.icon} alt="User Icon" className="icon-image" />
        ) : (
          <div className="placeholder-icon">User</div> // Fallback content if no icon
        )}
      </div>
      
    </nav>
  );
}

export default NavBar;
