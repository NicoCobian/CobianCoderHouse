import React from 'react'
import Carwidget from '../CarWidget/CarWidget'
import {Navbar, Container, Nav, NavDropdown,} from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function Header () {

  return (
<>  
<Navbar className='Navbarstyle' bg="light" expand="lg">
  <Container>
    <Navbar.Brand>
      <Link to="/">Home</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link>
          <Link to="/">
            Inicio
          </Link>
        </Nav.Link>
        <Nav.Link>
        <Link to="/products">
          productos
          </Link>
        </Nav.Link>
        <NavDropdown title="Discover" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Our services</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Offices</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Work with us</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <Carwidget/>
  </Container>
</Navbar>
</>
  )
}

