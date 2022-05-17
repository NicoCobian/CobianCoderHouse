export default function Carwidget ({count}){
  return(
    <div>
        <img className="Cart" src="Images/CartIcon.jpg" alt="CartIcon"/>
      {count}
    </div>
  )
}