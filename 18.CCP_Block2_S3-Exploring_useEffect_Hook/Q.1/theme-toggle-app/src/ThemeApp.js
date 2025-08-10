import React, { useState, useEffect } from 'react';
import ThemedBox from './ThemedBox';

function ThemeApp() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('appTheme') || 'light'
  );

  useEffect(() => {
    localStorage.setItem('appTheme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: theme === 'dark' ? '#121212' : '#fafafa',
        transition: 'background 0.3s',
        padding: '2rem',
      }}
    >
      <button
        onClick={handleToggleTheme}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '2rem',
          background: theme === 'dark' ? '#444' : '#ddd',
          color: theme === 'dark' ? '#fff' : '#333',
          fontWeight: 'bold',
        }}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>

      {/* Render multiple themed boxes */}
      <ThemedBox theme={theme}>This is Box #1</ThemedBox>
      <ThemedBox theme={theme}>This is Box #2</ThemedBox>
      <ThemedBox theme={theme}>This is Box #3</ThemedBox>
    </div>
  );
}

export default ThemeApp;
