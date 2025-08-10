import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Main() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <main style={mainStyle}>
      {isAuthenticated ? (
        <h2>Welcome! You are logged in.</h2>
      ) : (
        <h2>Please log in to access more features.</h2>
      )}
    </main>
  );
}

const mainStyle = {
  padding: '2rem',
  textAlign: 'center',
  minHeight: '200px',
  fontFamily: 'Arial, sans-serif',
};

export default Main;
