import {Card, Button} from "react-bootstrap";



export default function Item ({Products}){ 
  return(
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Products.Image} />
  <Card.Body>
    <Card.Title>{Products.Title}</Card.Title>
    <Card.Text>
     <p>Stock: {Products.Stock}</p>
     <p>price: {Products.Price}</p>
    </Card.Text>
    <Button variant="primary">see more</Button>
  </Card.Body>
</Card>
);
}