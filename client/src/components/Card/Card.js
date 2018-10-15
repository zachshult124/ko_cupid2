import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";
import passImage from "../../images/x-mark.png";
import pickImage from "../../images/glove.png";

const Card = props => (
  <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
  >
    {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      data-value="pass"
      image={passImage}
    />
    <CardBtn
      style={{ opacity: props.image ? 1 : 0 }}
      onClick={props.handleBtnClick}
      data-value="pick"
      image={pickImage}
    ></CardBtn>
  </div>
);

export default Card;
