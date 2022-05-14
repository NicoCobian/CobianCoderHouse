import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/home";
import { Products } from "./views/products";
import { Cart } from "./views/cart";

function App() {
return(
<BrowserRouter>
<Routes>
  <Route exact path= "/" element={<Home />} />
  <Route exact path= "/products" element={<Products />} />
  <Route exact path= "/cart" element={<Cart />} />
</Routes>
</BrowserRouter>
)
}