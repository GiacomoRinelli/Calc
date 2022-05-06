import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Line from "./Components/Line";

const App = () => {

  //Consts
  const [rows, setRows] = useState([
    {
      operationSign: "+",
      value: " ",
      isOff: false,
      disableBtnName: "Disable",
    },
  ]);


  const [displayedRes, setDisplayedRes] = useState(0);

  /* rowAddHandler handles the events, whenever a click on the 'Add Row' button occurs. 
     it creates a new row, giving some std values */

  const rowAddHandler = () => {
    var newRow = {
      operationSign: "+",
      value: " ",
      isOff: false,
      disableBtnName: "Disable",
    };

    setRows((old) => old.concat(newRow));
  };

  /* valChangeHandler updates the numeric value which has been input by the user */

  const valChangeHandler = (v, i) => {
    let newRows = [...rows];
    let newRow = { ...newRows[i], value: v };
    newRows[i] = newRow;
    setRows(newRows);
  };


  /* opSignChangeHandler updates the operation sign variation */

  const opSignChangeHandler = (s, i) => {
    let newRows = [...rows];
    let newRow = { ...newRows[i], operationSign: s };
    newRows[i] = newRow;
    setRows(newRows);
  };


  /* disablingHandler as the name suggests, handles the variations of the possible use of a line, updating with
     "Enable" / "Disable", depending on which state it is atm */

  const disablingHandler = (i) => {
    let newRows = [...rows];
    newRows[i].isOff === true
      ? (newRows[i].isOff = false)
      : (newRows[i].isOff = true);
    newRows[i].disableBtnName === "Disable"
      ? (newRows[i].disableBtnName = "Enable")
      : (newRows[i].disableBtnName = "Disable");
    setRows(newRows);
  };


  /* deletionHandler updates the array deleting the desired row, utilizing filter method */

  const deletionHandler = (i) => {
    let newRows = rows.filter((r, j) => j !== i);

    setRows(newRows);
  };

  /* useEffect is utilized to keep the displayed result constantly re-rendered whenever some changes to the rows occur */

  useEffect(() => {
    let tot = 0;

    rows.forEach((r) => {
      if (!r.isOff) {
        if (r.operationSign === "+") 
          tot += +r.value;
        else 
          tot -= r.value;
      }
    });

    setDisplayedRes(tot);
  }, [rows]);

  return (
    <div className="bg">
      <div className="title">React Calculator</div>

      {/* RowAdding Button */}
      <Button className="bg__addRowBtn" onClick={rowAddHandler}>
        Add Row
      </Button>

      {rows.map((v, i) => (
        /* Data flow to Line.js */
        <Line 
          key={i}
          i={i}
          row={v}
          opSignChangeHandler={opSignChangeHandler}
          valChangeHandler={valChangeHandler}
          disablingHandler={disablingHandler}
          deletionHandler={deletionHandler}
        />
      ))}

      {/* Displayed result handling */}
      <div className="bg__result"> Result is : {displayedRes} </div>
    </div>
  );
};

export default App;
