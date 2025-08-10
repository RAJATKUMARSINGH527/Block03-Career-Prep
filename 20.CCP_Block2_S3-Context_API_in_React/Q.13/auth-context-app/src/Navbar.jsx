import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Navbar() {
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);

  return (
    <nav style={navStyle}>
      <h1>My App</h1>
      <button onClick={toggleAuth} style={buttonStyle}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
}

const navStyle = {
  padding: '1rem 2rem',
  backgroundColor: '#007bff',
  color: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  fontSize: '1rem',
  cursor: 'pointer',
  borderRadius: '4px',
  border: 'none',
};

export default Navbar;
