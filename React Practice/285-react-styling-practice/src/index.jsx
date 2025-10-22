//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const hour = new Date().getHours();
let greeting;
let customStyle = {};

if (hour < 12) {
  greeting = "Morning";
  customStyle.color = "red";
} else if (hour < 18) {
  greeting = "Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Evening";
  customStyle.color = "blue";
}
console.log(hour);
ReactDOM.render(
  <div>
    <h1 style={customStyle} className="heading">Good {greeting}!</h1>
  </div>,
  document.getElementById("root")
);
