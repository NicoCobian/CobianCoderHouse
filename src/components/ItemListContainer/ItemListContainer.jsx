import React from "react"
import Counter from "../ItemCount/counter"

export default function ItemListContainer({ greeting }) {



 return (
<>
 <div>

  <h1> Este es mi Contenedor {greeting}</h1>

 </div>
 <Counter/>
  </>
 )

}
    
