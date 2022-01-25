import React from "react";
import "./../css/SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Verano",
    background: "backgroundSummer",
  },
  winter: {
    text: "invierno",
    background: "backgroundWinter",
  },
};

const getSeason = (lat, month) => {
  console.log(lat);
  console.log(month);

  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

function SeasonDisplay(props) {
  const season = getSeason(props.lat, props.month);
  const { text, background } = seasonConfig[season];

  return (
    <div className={`season-display ${background}`}>
      <h1>{text}</h1>
    </div>
  );
}

export default SeasonDisplay;
