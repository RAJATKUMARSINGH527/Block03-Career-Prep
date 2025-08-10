import React from 'react';

function ThemedBox({ theme, children }) {
  const styles = {
    padding: '2rem',
    margin: '1rem 0',
    borderRadius: '8px',
    backgroundColor: theme === 'dark' ? '#222' : '#eee',
    color: theme === 'dark' ? '#fff' : '#222',
    border: theme === 'dark' ? '1px solid #444' : '1px solid #ccc',
    transition: 'all 0.3s',
  };

  return <div style={styles}>{children}</div>;
}

export default ThemedBox;
