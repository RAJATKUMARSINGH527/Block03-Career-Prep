import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch users from API
    const fetchUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Filter users by name (case-insensitive)
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <h1>User Profiles</h1>

      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={inputStyle}
      />

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && filteredUsers.length === 0 && (
        <p>No users found for "{searchTerm}".</p>
      )}

      {!loading && !error && (
        <div>
          {filteredUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

const containerStyle = {
  maxWidth: '600px',
  margin: '2rem auto',
  fontFamily: 'Arial, sans-serif',
};

const inputStyle = {
  padding: '0.5rem',
  width: '100%',
  marginBottom: '1rem',
  fontSize: '1rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

export default App;
