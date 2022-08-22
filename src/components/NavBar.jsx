import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "boxicons";
import "../styles/navbar.css";
import imgMage from "../img/mage.png";

const NavBar = () => {
  return (
    <>
      <Navbar className="borderNavbar" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/#/">
          <div>
              <img className="mage" src={imgMage} />
            </div>
            <div className="name">
              <span className="Luri">Luri</span>
              <span className="mago">Mago</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto "></Nav>
            <Nav>
              <Nav.Link href="#deets">
                <span className="textNavbar">Home</span>
              </Nav.Link>
              <Nav.Link href="#deets">
                <span className="textNavbar">Acerca de mi</span>
              </Nav.Link>
              <Nav.Link href="#deets">
                <span className="textNavbar">Mis habilidades</span>
              </Nav.Link>
              <Nav.Link href="#deets">
                <span className="textNavbar">Mi portafolio</span>
              </Nav.Link>
              <Nav.Link href="#deets">
                <span className="textNavbar">Contacto</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
