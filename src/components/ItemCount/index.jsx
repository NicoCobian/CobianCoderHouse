
import "./ItemCount.scss";
import React, {useState} from "react";



export const ItemCount = ({initial, stock, onAdd}) => {
  const [count, setcount] = useState (initial);
  
  const decrease = () => {
    
    setcount(count - 1);
  }

  const increase = () => {
    
    setcount(count + 1);
  }
  return (
    <div className="Counter">
      <button disabled={count <= 1} onClick={decrease}>-</button>
      <span>{count}</span>
      <button disabled={count >= stock} onClick={increase}>+</button>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  </div>
  );
}

export default ItemCount;