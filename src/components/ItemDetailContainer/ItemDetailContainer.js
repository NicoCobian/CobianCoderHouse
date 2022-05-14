import { Products } from "../ItemListContainer/ItemList";
import { ItemDetail } from "./ItemDetail";



  const getItem = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve (Products);
    }, 2000);
  
  })
  
  getItem.then((ItemDetail) => {
    console.log(ItemDetail)
  }, err => {
    console.log (err)
  }).catch((err) => {
    console.log(err)
  })
  
    export default function ItemDetailContainer ( ItemDetail){
      return(
        getItem
      );

    }