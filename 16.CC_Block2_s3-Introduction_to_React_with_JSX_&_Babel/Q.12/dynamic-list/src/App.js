// src/App.js
import React from 'react';

function App() {
  const topics = ["React", "JavaScript", "CSS"]; // hardcoded list

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>My Tech Stack</h2>
      <ul>
        {topics.map((item, index) => (
          <li key={index}>{item}</li> // render each item
        ))}
      </ul>
    </div>
  );
}

export default App;
