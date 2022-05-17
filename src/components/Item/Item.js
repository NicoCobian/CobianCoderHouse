import {Card, Button} from "react-bootstrap";
import React from "react";

const Item =  ({ info }) => {
  return(
    <a href=''className="products">
      <img src={info.image} alt=""/>
      <p>{info.Title}</p>
    </a>
  );
}
export default Item;


