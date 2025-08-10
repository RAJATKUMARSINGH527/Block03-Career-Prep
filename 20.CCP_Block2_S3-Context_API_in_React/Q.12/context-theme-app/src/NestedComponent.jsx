import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function NestedComponent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: '1.5rem',
        borderRadius: '8px',
        backgroundColor: theme === 'light' ? '#eee' : '#555',
        color: theme === 'light' ? '#222' : '#ddd',
        transition: 'all 0.3s'
      }}
    >
      <h2>Nested Component</h2>
      <p>This component changes its style based on the global theme.</p>

      <EvenMoreNested />
    </div>
  );
}

function EvenMoreNested() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '1rem',
        borderRadius: '6px',
        backgroundColor: theme === 'light' ? '#ddd' : '#444',
        color: theme === 'light' ? '#111' : '#eee'
      }}
    >
      <p>Even deeper component also follows the global theme!</p>
    </div>
  );
}

export default NestedComponent;
