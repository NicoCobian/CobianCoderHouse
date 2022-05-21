import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar/Navbar";
import Carwidget from "./components/CarWidget/CarWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/Index";
  
  function App() {
  return(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path= "/" element={<ItemListContainer />} />
    <Route exact path= "/products" element={<ItemListContainer />} />
    <Route exact path= "/products/:id" element={<ItemDetailContainer />} />
    <Route exact path= "/cart" element={<Carwidget />} />
  </Routes>
  </BrowserRouter>
  
  )
  }
  
export default App;
