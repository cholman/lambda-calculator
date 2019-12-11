import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file
//console.log(operators);

const Operators = () => {
  const [operatorsState, setOperatorState] = useState(operators);
  console.log(operatorsState);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operatorsState.map(
        operator => {
          return <OperatorButton operatorValue={operator.value} operatorChar={operator.char}></OperatorButton>
                
        
        }
      )}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;