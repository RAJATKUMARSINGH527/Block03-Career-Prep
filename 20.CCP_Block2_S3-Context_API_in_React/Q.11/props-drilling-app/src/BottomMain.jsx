import React from "react";
import BottomMainRight from "./BottomMainRight";

function BottomMain({ name }) {
  return (
    <div style={{ border: "1px solid #eee", padding: "1rem" }}>
      <h4>Bottom Main</h4>
      <BottomMainRight name={name} />
    </div>
  );
}

export default BottomMain;
