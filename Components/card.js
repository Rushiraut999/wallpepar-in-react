import React from "react";
import { SlArrowDownCircle } from "react-icons/sl";
const Card = (props) => {
  console.log(props.data);
  return (
    <div className="box">
      <img src={`${props.data.download_url}`}></img>
      <dev className="name">
        <h2>{props.data.author}</h2>
        <a href={`${props.data.download_url}`}>
          <SlArrowDownCircle />
        </a>
      </dev>
    </div>
  );
};

export default Card;
