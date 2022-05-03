import { Col, Container, Row } from "react-bootstrap";
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
            <h1> Este es el contenido principal</h1>
            </Col>
          </Row>
        </Container>
      </main>
      <ItemListContainer greeting={"hola mundo"}/>

    </div>
  );
}

export default App;
