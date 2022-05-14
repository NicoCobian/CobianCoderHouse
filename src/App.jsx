import { Col, Container, Row } from "react-bootstrap";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Header from "./components/Navbar/Navbar";


function App() {

  
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <Container>
          <Row>
            <Col>
            <h1> Main Content</h1>
            </Col>
          </Row>
        </Container>
     
      </main>
      <ItemListContainer greeting={"Start Shopping"}/>
    
    </div>
  );
}

export default App;
