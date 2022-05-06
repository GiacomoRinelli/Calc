import React from "react";
import { Button, Form } from "react-bootstrap";
import "../App.css";



const Line = (props) => {
  return (
    <div className="line">

      <Form.Select
        onChange={(event) =>
          props.opSignChangeHandler(event.target.value, props.i)
        }
      >
        <option>+</option>
        <option>-</option>
      </Form.Select>

      <Form.Control
        type="number"
        placeholder="Input number"
        min="0"
        disabled={props.row.isOff}
        value={props.row.value}
        onChange={(event) =>
          props.valChangeHandler(event.target.value, props.i)
        }
      ></Form.Control>
      
      <Button
        className="bg__btn"
        onClick={() => props.deletionHandler(props.i)}
      >
        Delete
      </Button>

      <Button
        className="bg__btn"
        onClick={() => props.disablingHandler(props.i)}
      >
        {props.row.disableBtnName}
      </Button>

    </div>
  );
};
export default Line;
