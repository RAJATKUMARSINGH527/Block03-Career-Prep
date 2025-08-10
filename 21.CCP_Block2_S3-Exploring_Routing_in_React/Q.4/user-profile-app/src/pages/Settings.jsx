import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../UserContext';

function Settings() {
  const { user, updateUser } = useContext(UserContext);

  // Local state for form inputs
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  // useEffect to update form fields if user changes
  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ name, email });
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{ width: '100%', padding: '0.4rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.4rem' }}
          />
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>
          Update
        </button>
      </form>
    </div>
  );
}

export default Settings;
