import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import NestedComponent from './NestedComponent';

function App() {
  return (
    // Wrap everything inside ThemeProvider
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme === 'light' ? '#fafafa' : '#333',
        color: theme === 'light' ? '#222' : '#eee',
        padding: '2rem',
        transition: 'all 0.3s'
      }}
    >
      <button
        onClick={toggleTheme}
        style={{
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '2rem',
          backgroundColor: theme === 'light' ? '#222' : '#ddd',
          color: theme === 'light' ? '#fff' : '#000',
          fontWeight: 'bold',
        }}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>

      {/* Render nested component */}
      <NestedComponent />
    </div>
  );
}

export default App;
