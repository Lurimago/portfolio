import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/progresscircularbar.css";
import "../styles/myskills.css";
import imgHtml from "../img/html.png";
import imgCss from "../img/css.png";
import imgJs from "../img/js.png";
import imgReact from "../img/react.png";

const Skills_FrontEnd = () => {
  return (
    <Container>
      <div className="divContainer">
        <div className="divSubContainer">
          <p className="Titles">My Skills</p>
          <p className="skillsTitles">FRONT END</p>
          {/* HTML */}
          <div className="percent" style={{ "--clr": "red", "--num": "90" }}>
            <div className="dot"></div>
            <img className="imgSkill" src={imgHtml} />
            <svg>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
            </svg>
            <div className="number">
              <h3>90%</h3>
              <h4>HTML</h4>
            </div>
          </div>
          {/* CSS */}
          <div
            className="percent"
            style={{ "--clr": "#06ccff", "--num": "85" }}
          >
            <div className="dot"></div>
            <img className="imgSkill" src={imgCss} />
            <svg>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
            </svg>
            <div className="number">
              <h3>85%</h3>
              <h4>CSS</h4>
            </div>
          </div>
          {/* JAVASCRIPT */}
          <div className="percent" style={{ "--clr": "yellow", "--num": "70" }}>
            <div className="dot"></div>
            <img className="imgSkill" src={imgJs} />
            <svg>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
            </svg>
            <div className="number">
              <h3>70%</h3>
              <h4>JAVASCRIPT</h4>
            </div>
          </div>
          {/* REACT */}
          <div
            className="percent"
            style={{ "--clr": "#06ccff", "--num": "85" }}
          >
            <div className="dot"></div>
            <img className="imgSkill" src={imgReact} />
            <svg>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
              <circle cx="70" cy="70" r="70">
                {" "}
              </circle>
            </svg>
            <div className="number">
              <h3>85%</h3>
              <h4>REACT</h4>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Skills_FrontEnd;
