import react from "react";
import ReactDOM from "react-dom";
import DecisionCard from "./components/DecisionCard";
import Comment from "./components/Comment";
import Sandwich from "./components/Sandwich";

const App = () => {
  return (
    <div
      className="ui comments"
      style={{ backgroundColor: "white", padding: "20px" }}
    >
      <h3 className="ui dividing header">Comments</h3>

      <DecisionCard name="Card">Buenass</DecisionCard>
      <Comment name="Juan" text="Buenasss" />
      <Comment name="Fede" text="Chau" />
      <Comment name="Fabri" text="Fue" />
    </div>
  );
};

ReactDOM.render(
  <Sandwich>
    <App />
  </Sandwich>,
  document.querySelector("#root")
);
