import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      <button className="specialsButton" onClick = {
        () => {
          props.setDisplay(200);
        }
      }>
        {props.specialValue}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default SpecialButton;
