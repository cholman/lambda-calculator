import React, {useState} from "react";
import { tsPropertySignature } from "@babel/types";

const OperatorButton = (props) => {
  return (
    <>
      <button className="operatorsButton" onClick = {() => {
        //setDisplay(props.operatorValue);
        //console.log(display);
      } }>
      {props.operatorChar}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {/* </div><button onClick={() => setHome(home + 1)} */}
    </>
  );
};

export default OperatorButton;