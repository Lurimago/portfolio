import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/componentTest.css";
import imgLinkedin from "../img/linkedin.png";
import imgGithub from "../img/github.png";
import imgDownload from "../img/download.png";
import imgGmail from "../img/gmail.png";
import imgFacebook from "../img/facebook.png";
import imgWhatsapp from "../img/whatsapp.png";

const ComponentTest = () => {
  return (
    <Container>
      <div className="contenido">
      <img className="facebook" src={imgFacebook} />
        <img className="linkedin" src={imgLinkedin} />
        <img className="download" src={imgDownload} />
        <img className="gmail" src={imgGmail} />
        <img className="facebook" src={imgFacebook} />
        <img className="whatsapp" src={imgWhatsapp} />
        <img className="facebook" src={imgFacebook} />
      </div>
    </Container>
  );
};

export default ComponentTest;
