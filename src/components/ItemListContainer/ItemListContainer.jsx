import React from "react"
import ItemCount from "../ItemCount";

export default function ItemListContainer({ greeting }) {

const onAdd = (quantity) => {
  console.log(`compraste ${quantity} unidades`);
}

 return (
<>
 <div>

  <h1>This is a container {greeting}</h1>

  <ItemCount initial={1} stock={5} onAdd={onAdd} />
 </div>
 
  </>
 )

}
    
