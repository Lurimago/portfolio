import React, { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import "boxicons";
import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [displacementFilter, setDisplacementFilter] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (token) {
      setShow(true);
    } else {
      navigate("/login");
    }
  };

  const logOut = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

    const list = document.querySelectorAll('.list');
    function activeLink(){
        list.forEach((item)=>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) => item.addEventListener('click',activeLink));
  return (
    <>
      <Navbar  className="borderNavbar" variant="dark" expand="lg">
        <Container >
          <Navbar.Brand href="/#/" >
          <span className="Luri">Luri</span>
          <span className="mago">Mago</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto "></Nav>
            <Nav>
              <Nav.Link href="#deets"><span className="textNavbar">Home</span></Nav.Link>
              <Nav.Link href="#deets"><span className="textNavbar">Acerca de mi</span></Nav.Link>
              <Nav.Link href="#deets"><span className="textNavbar">Mis habilidades</span></Nav.Link>
              <Nav.Link href="#deets"><span className="textNavbar">Mi portafolio</span></Nav.Link>
              <Nav.Link href="#deets"><span className="textNavbar">Contacto</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
