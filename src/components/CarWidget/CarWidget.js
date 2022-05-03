export default function Carwidget ({count}){
  return(
    <div>
        <img className="Cart" src="Images/cartimage.png" alt="carticon"/>
      {count}
    </div>
  )
}