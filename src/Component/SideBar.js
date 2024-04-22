// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
      <li><Link to="/">View All Products</Link></li>
        <li><Link to="/add-product">Add a Product</Link></li>
        <li><Link to="/view-orders">View Orders</Link></li>
        <li><Link to="/view-completed-orders">View Completed Orders</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
