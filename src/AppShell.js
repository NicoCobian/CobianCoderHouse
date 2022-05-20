import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Navbar/Navbar";

function App() {
return(
<BrowserRouter>
<Header/>
<Routes>
  <Route exact path= "/" element={<Header />} />
  <Route exact path= "/products" element={<ItemListContainer />} />
  <Route exact path= "/products/:id" element={<ItemListContainer />} />

  <Route exact path= "/cart" element={<Cart />} />
</Routes>
</BrowserRouter>

)
}

export default App;