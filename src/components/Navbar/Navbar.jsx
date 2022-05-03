import Carwidget from '../CarWidget/CarWidget'
import {Navbar, Container, Nav, NavDropdown,} from "react-bootstrap";
import React from 'react'

export default function Header () {

const Button = ({texto}) => {
  console.log(texto)
  return(
    <input className='boton' type="button" value={texto}/>
  )
}

  return (
<>  
<Navbar className='Navbarstyle' bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Noleggio</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Macchine</Nav.Link>
        <Nav.Link href="#link">Motos</Nav.Link>
        <NavDropdown title="Bicicclete" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Montagna</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Corsa</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Sono povero non riesco a comprare nulla</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
  <Carwidget/>

</Navbar>

<Button texto= "CLICKEAME"/>
<Button texto= "CLICKEAME"/>
<Button texto= "CLICKEAME"/>
<Button texto= "CLICKEAME"/>
<Button texto= "CLICKEAME"/>

</>


  )
}

