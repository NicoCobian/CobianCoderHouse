import axios from "axios";
import React from "react";
import { Products } from "../ItemListContainer/ItemList";

export default function ItemDetailCointainer () {
  const [item, setItem] = React.useState([])
  

  const getItem = () =>{
    resolve(Products)
    axios
    .get()
    .then((res) => {
      setItem(res.data.results[3])
    })
    console.log(getItem)
  }
  }