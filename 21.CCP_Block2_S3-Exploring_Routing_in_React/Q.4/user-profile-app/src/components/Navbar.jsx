import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'blue'
  };

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} end>Home</NavLink> |{" "}
      <NavLink to="/profile" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Profile</NavLink> |{" "}
      <NavLink to="/settings" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Settings</NavLink>
    </nav>
  );
}

export default Navbar;
