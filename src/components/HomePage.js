import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>Welcome to our Store</h2>
      <div>
        <Link to="/products">
          <button>Go to Products</button>
        </Link>
        <Link to="/orders">
          <button>Go to Orders</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
