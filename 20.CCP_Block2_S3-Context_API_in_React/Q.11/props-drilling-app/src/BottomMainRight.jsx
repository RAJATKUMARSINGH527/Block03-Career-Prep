import React from "react";

function BottomMainRight({ name }) {
  return (
    <div style={{ border: "1px dashed #666", padding: "1rem" }}>
      <strong>Hi, {name ? name : "[No name entered]"}!</strong>
    </div>
  );
}

export default BottomMainRight;
