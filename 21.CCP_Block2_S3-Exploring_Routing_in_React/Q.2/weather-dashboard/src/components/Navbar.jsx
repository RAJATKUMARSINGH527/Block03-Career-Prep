
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'blue',
  };

  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)} end>
        Home
      </NavLink>
    </nav>
  );
};

export default Navbar;
