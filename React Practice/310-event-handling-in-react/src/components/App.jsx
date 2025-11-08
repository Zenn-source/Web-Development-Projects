import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  const [isHovered, setHovered] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setHovered(true);
  }

  function handleMouseOut() {
    setHovered(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{
          backgroundColor: isHovered ? "black" : "white",
          color: isHovered ? "white" : null,
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default App;
