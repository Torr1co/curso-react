import React from "react";

const Sandwich = (props) => {
  return (
    <div style={{ backgroundColor: "#808080", padding: "20px" }}>
      {props.children}
    </div>
  );
};

export default Sandwich;
