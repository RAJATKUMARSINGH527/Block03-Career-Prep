import React, { createContext, useState } from 'react';

// 1️⃣ Create the context
export const ThemeContext = createContext();

// 2️⃣ Create a Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
