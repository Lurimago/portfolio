import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/navbar.css";
import image from "../img/sentado.jpg";
import imgLinkedin from "../img/linkedin.png";
import imgGithub from "../img/github.png";
import imgGmail from "../img/gmail.png";
import imgFacebook from "../img/facebook.png";
import imgWhatsapp from "../img/whatsapp.png";
import imgDownload from "../img/download.png";

const Ring = () => {
  const [displacementFilter, setDisplacementFilter] = useState();
  return (
    <>
    <div className="containgerRing">
    <img className="myphoto"src={image} />
    <div className="ring">
      <svg>
        <filter id="wave">
          <feTurbulence
            x="-40px"
            y="-40px"
            baseFrequency="0.02"
            numOctaves="5"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="15"
              values="0.01 ; 0.02 ; 0.01"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="30" />
        </filter>
      </svg>

      <svg
        className="hole"
        width="200px"
        height="200px"
        viewBox="0 0 220 220"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.05"
            numOctaves="2"
            result="turbulence"
            seed="2"
          >
            <animate
              attributeName="baseFrequency"
              dur="15"
              values="0.03 ; 0.05 ; 0.03"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="50"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        <circle
          cx="100"
          cy="100"
          r="100"
          style={{ filter: `url(#${displacementFilter})` }}
        />
      </svg>
    </div>

    </div>
    <Container>
        <div className="rectangleSocialNetworks">
           <img className="linkedin"src={imgLinkedin} />
           <img className="github"src={imgGithub} />
           <img className="download"src={imgDownload} />
           <img className="gmail"src={imgGmail} />
           <img className="facebook"src={imgFacebook} />
           <img className="whatsapp"src={imgWhatsapp} />  
        </div>
        </Container>
        </>
  );
};

export default Ring;
