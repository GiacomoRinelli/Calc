import React from "react";
import "./OpForm.css";

const OpForm = () => {
  return (
    <div className="op-form">
      {/*div handling op button*/}
      <div className="operando">
        <label>Operando</label>
        <select>
          <option>+</option>
          <option>-</option>
        </select>
      </div>

      {/*div handling number input button */}
      <div className="number-input">
        <label>Insert number</label>
        <input type="number"></input>
      </div>

      <button>Delete</button>

      <button>Disable</button>
    </div>
  );
};

export default OpForm;
