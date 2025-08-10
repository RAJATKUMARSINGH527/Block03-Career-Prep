import React from 'react';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <AuthProvider>
      <div style={appStyle}>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </AuthProvider>
  );
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  justifyContent: 'space-between',
};

export default App;
