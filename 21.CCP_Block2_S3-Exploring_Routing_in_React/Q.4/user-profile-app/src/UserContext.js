import React, { createContext, useState } from 'react';

// 1️⃣ Create the context
export const UserContext = createContext();

// 2️⃣ Create provider component
export function UserProvider({ children }) {
  // Mock logged-in user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com'
  });

  // Function to update user data
  const updateUser = (updatedData) => {
    setUser(prev => ({ ...prev, ...updatedData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}
