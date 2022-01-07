import React from "react";
import ReactDOM from "react-dom";

// Deben colocar la hora actual donde se debe en lugar de un valor fijo
const App = () => {
  function getTime() {
    return new Date().toLocaleTimeString();
  }

  return (
    <div>
      <div>Hora Actual:</div>
      <h3>12:05 PM</h3>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
