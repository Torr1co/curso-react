import react from "react";
import ReactDOM from "react-dom";

const miFuncion = () => {
  return "valor devuelto";
};
const App = () => {
  return <div>{miFuncion()}</div>;
};
ReactDOM.render(<App />, document.querySelector("#root"));
