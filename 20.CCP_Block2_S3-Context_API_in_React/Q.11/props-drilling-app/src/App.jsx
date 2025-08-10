import React, { useState } from "react";
import Main from "./Main";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h2>Props Drilling Example</h2>
      <label>
        Enter your name:{" "}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Type your name"
        />
      </label>
      <Main name={name} />
    </div>
  );
}

export default App;
