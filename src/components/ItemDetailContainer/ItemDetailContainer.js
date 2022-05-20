
import React, { useEffect, useState } from 'react';

import { ItemDetail } from "../../ItemDetail/ItemDetail";

import { Products } from "../ItemListContainer/ItemList";


export default function ItemDetailContainer() {

 const [product, setProduct] = useState({});

 useEffect(() => {

  const getItem = new Promise((resolve) => {

   setTimeout(() => {

    resolve(Products);

   }, 2000);

  })

  getItem.then(res => {

   setProduct(res.find(prod => prod.id === 1))
  })
 }, [])

 return (

  <ItemDetail product={product} />

 );
}