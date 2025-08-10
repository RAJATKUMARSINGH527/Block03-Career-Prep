import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Footer() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <footer style={footerStyle}>
      {isAuthenticated ? 'Welcome, User' : 'Please log in'}
    </footer>
  );
}

const footerStyle = {
  padding: '1rem',
  textAlign: 'center',
  backgroundColor: '#f1f1f1',
  fontWeight: 'bold',
};

export default Footer;
