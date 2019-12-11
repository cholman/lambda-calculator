import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      <button className="NumbersButton" onClick = {() =>
        props.setDisplay(props.numberValue)
      }>
        {props.numberValue}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </div>
  );
};

export default NumberButton;
