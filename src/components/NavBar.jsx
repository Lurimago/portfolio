import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { Row, Card, Col, InputGroup, Form, Button, ListGroup } from "react-bootstrap";
import 'boxicons'

const NavBar = () => {
  return (
    <Navbar bg="light" variant="danger" expand="lg">
      <Container>
        <Navbar.Brand href="#/" className="navBarTitle">Ecommerce App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navBarIcons">
            <Nav.Link href="#login"><i class='bx bx-user' id="user-icon"></i></Nav.Link>
            <Nav.Link href="#purchaces"><i class='bx bx-heart' id="heart-icon"></i></Nav.Link>
            <Nav.Link href="#cart"><i class='bx bx-cart' id="cart-icon"></i></Nav.Link>
            {/* <div class="navBarIcons-5">
              <i class='bx bx-user' id="user-icon"></i>
              <i class='bx bx-heart' id="heart-icon"></i>
              <i class='bx bx-cart' id="cart-icon"></i>
            </div> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};

export default NavBar;