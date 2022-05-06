import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const App = () => {
  //Consts
  const [rows, setRows] = useState([
    {
      sign: "+",
      num: " ",
      off: false,
    },
  ]);

  const [sum, setSum] = useState(0);

  /* rowAddHandler handles the events, whenever a click on the 'Add Row' button occurs. 
     it creates a new row, giving some std values */

  const rowAddHandler = () => {
    var newRow = {
      sign: "+",
      num: " ",
      off: false,
    };

    setRows((old) => old.concat(newRow));
  };

  /* To comment */

  const valChangeHandler = (v, i) => {
    let newRows = [...rows];
    let newRow = { ...newRows[i], num: v };
    newRows[i] = newRow;
    setRows(newRows);
  };

  /* To comment */
  const signChangeHandler = (s, i) => {
    let newRows = [...rows];
    let newRow = { ...newRows[i], sign: s };
    newRows[i] = newRow;
    setRows(newRows);
  };

  /* To comment */
  const disablingHandler = (i) => {
    let newRows = [...rows];
    let newRow = { ...newRows[i], off: true };
    newRows[i] = newRow;
    setRows(newRows);
  };

  const deletionHandler = (i) => {
    let newRows = rows.filter((r,j) => j !==i );
    setRows(newRows);
  };

  /* To comment */

  useEffect(() => {
    let tot = 0;
    rows.forEach((r) => {
      if (r.off !== true) {
        if (r.sign === "+") {
          tot += +r.num;
        } else {
          tot = tot - r.num;
        }
      }
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
        /* Single row structure */
        <div className="line">
          <select
            onChange={(event) => signChangeHandler(event.target.value, i)}
          >
            <option>+</option>
            <option>-</option>
          </select>
          <input
            type="number"
            onChange={(event) => valChangeHandler(event.target.value, i)}
          ></input>
          <Button className="bg__btn" onClick={() => deletionHandler(i)}>
            Delete
          </Button>
          <Button className="bg__btn" onClick={() => disablingHandler(i)}>
            Disable
          </Button>
        </div>
      ))}

      {/*Result handling*/}
      <div className="bg__result"> Result is : {sum} </div>
    </div>
  );
};

export default App;
