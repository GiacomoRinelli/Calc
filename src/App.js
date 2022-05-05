import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const App = () => {
  //Consts
  const [rows, setRows] = useState([
    {
      op: 0,
      num: " ",
      off: false,
    },
  ]);

  const [sum, setSum] = useState(0);

  const rowAddHandler = () => {
    var newRow = {
      op: 0,
      num: ' ',
      off: false,
    };

    setRows((old) => old.concat(newRow));
  };

  const valChangeHandler = (v, i) => {
    let newRows = [...rows];
    let newRow = { ...newRows[i], num: v };
    newRow[i] = newRow;
    setRows(newRows);
    //calcSum(rows);
  };

 /* const calcSum = (rows) => {
    let i, tot=0;
    for(i=0; i<(rows.length); i++) {
      tot += rows.num;
    }
    setSum(tot);
  }; */

  useEffect(() => {
    let tot = 0;
    rows.forEach((r) => {
      tot += r.num;
    });
    setSum(tot);
  }, [rows]);

  

  return (
    <div className="bg">
      <div className="title">--- CALCULATOR ---</div>

      {/* RowAdding */}
      <button className="bg__addRowBtn" onClick={rowAddHandler}>
        Add Row
      </button>

      {rows.map((v, i) => (
        /* Single row */
        <div className="line">
          <select>
            <option>+</option>
            <option>-</option>
          </select>
          <input
            type= 'number'
            onChange={(event) => valChangeHandler(event.target.value, i)}
          ></input>
          <Button className="bg__btn">Delete</Button>
          <Button className="bg__btn">Disable</Button>
        </div>
      ))}

      {/*Result handling*/}
      <div className="bg__result"> Result is : {sum} </div>
    </div>
  );
};

export default App;
