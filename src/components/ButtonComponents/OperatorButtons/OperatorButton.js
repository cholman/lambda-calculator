import React from "react";
import { tsPropertySignature } from "@babel/types";

const OperatorButton = (props) => {
  return (
    <div>
      <button className="operatorsButton">
      {props.operatorChar}
      </button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
    </div>
  );
};

export default OperatorButton;