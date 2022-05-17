import React, { useState, useEffect } from "react"
import ItemCount from "../ItemCount";
import {Products} from "./ItemList";
import Item from "../Item/Item";
import ItemList from "/i"


    
export const ItemListContainer = ({greeting}) => {
  const[data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout (() => {
        resolve(Products);

      }, 3000);
    });
    getData.then(res => setData(res));

}, [])

const onAdd = (quantity) => {
  console.log(`Compraste ${quantity} unidades`);
}
return(
  <>
  <title greeting={greeting} />
  <ItemCount initial={3} stock={5} onAdd={onAdd} />
  <ItemList data={data}/>
  </>
);
}
export default ItemListContainer;
