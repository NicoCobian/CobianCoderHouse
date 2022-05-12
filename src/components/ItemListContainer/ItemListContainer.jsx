import React from "react"
import ItemCount from "../ItemCount";
import {Products} from "./ItemList";
import Item from "../Item/Item";


export default function ItemListContainer({ greeting }) {

const onAdd = (quantity) => {
  console.log(`compraste ${quantity} unidades`);
}

const task = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve (Products);
  }, 2000);

})

task.then((result) => {
  console.log(result)
}, err => {
  console.log (err)
}).catch((err) => {
  console.log(err)
})

console.log(Products.map((Products) => Products.title));

 return (
<>
 <div>

  <h1>This is a container {greeting}</h1>
  {Products.map((Products, index) => (
    <Item Products = {Products} key ={Products.id}/>
  )
  )}
  
  <ItemCount initial={1} stock={5} onAdd={onAdd} />

 </div>
 
  </>
 )

}
    
