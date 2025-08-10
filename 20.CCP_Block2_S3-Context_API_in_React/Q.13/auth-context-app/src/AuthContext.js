import React, { createContext, useState } from 'react';

// 1. Create the Context object
export const AuthContext = createContext();

// 2. Create a Provider component that manages auth state and provides toggle function
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Toggle the authentication state
  const toggleAuth = () => {
    setIsAuthenticated(prev => !prev);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
