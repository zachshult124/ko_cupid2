import React from "react";
import "./CardBtn.css";

const CardBtn = props => (
  <button
    onClick={props.onClick}
    className={`card-btn ${props["data-value"]}`}
    {...props}
  ><img data-value={props["data-value"]} src={props.image} alt="" /></button>
);

export default CardBtn;
