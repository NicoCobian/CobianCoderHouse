import React from "react"
import Item from "../Item/Item"

export const Products = [
{
  id: 1,
  Title: "Iphone 13",
  Stock: 3,
  Price: 1000,
  Image: "/Images/13.jpg"
},
{
  id: 2,
  Title: "Iphone 13 pro",
  Stock: 3,
  Price: 1000,
  Image: "/Images/13-pro.png"
},
{
  id: 3,
  Title: "Iphone 13 pro max",
  Stock: 3,
  Price: 1000,
  Image:"/Images/13-pro-max.webp"
},
{
  id: 4,
  Title: "Samsung s22",
  Stock: 3,
  Price: 1000,
  Image: "/Images/s22.webp"
},
{
  id: 5,
  Title: "Samnsung s22 Ultra",
  Stock: 3,
  Price: 1000,
  Image: "/Images/s22-ultra.jpg"
},
{
  id: 6,
  Title: "Samnsung s21 Ultra",
  Stock: 3,
  Price: 1000,
  Image: "/Images/s21-ultra.jpg"
}
]

const ItemList = ({data = [] }) =>{
  return(
    data.map(Products => <Item key={Products.id} info={Products} />)
  );
}
export default ItemList;