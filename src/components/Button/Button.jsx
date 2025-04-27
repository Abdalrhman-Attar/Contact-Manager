import React from "react";
import "./Button.css"; // <-- import the css file here

function Button(props) {
  const { text, onClick } = props;
  return (
    <div>
      <button onClick={onClick} className="button">
        {text}
      </button>
    </div>
  );
}

export default Button;
