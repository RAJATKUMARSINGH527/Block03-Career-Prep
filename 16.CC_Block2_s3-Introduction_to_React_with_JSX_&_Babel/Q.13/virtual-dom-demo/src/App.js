// src/App.js
import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState("React Title");
  const [updateCount, setUpdateCount] = useState(0);

  const handleTitleChange = () => {
    setTitle("React Updated Title " + (updateCount + 1));
    setUpdateCount(prev => prev + 1);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>{title}</h2>
      <p>React DOM updates: {updateCount}</p>
      <button onClick={handleTitleChange}>Change Title (React)</button>
    </div>
  );
}

export default App;
