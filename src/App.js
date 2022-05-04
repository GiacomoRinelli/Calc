import React, {useState} from "react";
import "./App.css";
import OpLine from "./Components/OpLine";

function App() {

  const addRowHandler = () => {
    return(
      <OpLine></OpLine>
    );
  };


  return (
    <div>
      <div className="bg">
        <button onClick={addRowHandler} > Add Row </button>
        <OpLine></OpLine>
        <div className="result">Result is : (piazzerò la var risultato) </div>
      </div>
    </div>
  );
}

export default App;
