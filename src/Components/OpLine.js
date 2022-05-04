import React from "react";
import Card from "./Card/Card";
import './OpLine.css';
import OpForm from "./OpForm/OpForm";

const OpLine = () => {

    return(
        <Card className="line">   
            <OpForm></OpForm>
        </Card>
    );
};

export default OpLine;