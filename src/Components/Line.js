import React from "react";
import { Button, Form } from "react-bootstrap";


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
        min="0"
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
