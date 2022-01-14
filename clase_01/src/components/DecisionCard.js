import React from "react";

const DecisionCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Aprovar</div>
          <div className="ui basic red button">Rechazar</div>
        </div>
      </div>
    </div>
  );
};

export default DecisionCard;
