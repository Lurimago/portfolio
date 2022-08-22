import React, { useState } from "react";
import { Navbar, Container, Nav, Carousel } from "react-bootstrap";
import "boxicons";
import "../styles/navbar.css";

const AboutMe = () => {
  return (
    <Container>
      <Carousel fade>
        <div className="prueba">
          <Carousel.Item>
            <img
              className="d-block"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSowA0g3PadCfrqEmwope4ZVECAU2-lXmCvw&usqp=CAU"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://www.w3schools.com/images/w3lynx_200.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://miro.medium.com/max/730/0*LROOV9TcKje5hsyi.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </div>
      </Carousel>
    </Container>
  );
};

export default AboutMe;
