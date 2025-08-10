import React from "react";
import BottomMain from "./BottomMain";

function Main({ name }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", marginTop: "1rem" }}>
      <h3>Main Component</h3>
      <BottomMain name={name} />
    </div>
  );
}

export default Main;
