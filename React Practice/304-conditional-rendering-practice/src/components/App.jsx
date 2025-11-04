import React from "react";
import Form from "./Form";

let userIsRegistered = false;

function renderConditionally() {
  if (userIsRegistered) {
    return <Form isRegistered = {userIsRegistered}/>
  } else {
    return <Form />;
  }
}

function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}

export default App;
