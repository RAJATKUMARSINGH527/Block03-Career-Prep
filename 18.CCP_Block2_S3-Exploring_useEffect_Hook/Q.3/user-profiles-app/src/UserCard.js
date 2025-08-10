import React from 'react';

function UserCard({ user }) {
  return (
    <div style={cardStyle}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1rem',
  backgroundColor: '#fefefe',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
};

export default UserCard;
