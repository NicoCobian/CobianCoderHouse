import { Link } from "react-router-dom";

export default function Carwidget ({count}){
  return(
    <div>
        <img className="Cart" src="Images/CartIcon.jpg" alt="CartIcon"/>
      <Link to="/cart"></Link>
    </div>
  )
}