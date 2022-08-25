import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/progresscircularbar.css";
import "../styles/myskills.css";
import imgGithub from "../img/github.png";

const Skills_FrontEnd = () => {
  return (
    <Container>
      <div className="divContainer">
      <div className="divSubContainer">
      <p className="Titles">My Skills</p>
      <p className="skillsTitles">FRONT END</p>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-1">
              <div className="fill-1"></div>
            </div>
            <div className="mask half">
              <div className="fill-1"></div>
            </div>
            <img className="github"src={imgGithub} />
          </div>
        </div>
        <p className="skillsTitles">85%</p>
        </div>
      </div>
    </Container>
  );
};
export default Skills_FrontEnd;
