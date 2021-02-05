import React from "react";
import "./Button.css";

function Button({ displaytext }) {
  return (
    <div className="button">
      <button className="button__custom">{displaytext}</button>
    </div>
  );
}

export default Button;
