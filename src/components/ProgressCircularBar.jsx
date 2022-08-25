import React, { useState } from "react";
import { Container } from "react-bootstrap";

import "react-circular-progressbar/dist/styles.css";
import "../styles/progresscircularbar.css";

const ProgressCircularBar = () => {
  return (
    <Container>
      <div className="all">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-1">
              <div className="fill-1"></div>
            </div>
            <div className="mask half">
              <div className="fill-1"></div>
            </div>
            <div className="inside-circle"> 85% </div>
          </div>
        </div>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-2">
              <div className="fill-2"></div>
            </div>
            <div className="mask half">
              <div className="fill-2"></div>
            </div>
            <div className="inside-circle"> 65% </div>
          </div>
        </div>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-3">
              <div className="fill-3"></div>
            </div>
            <div className="mask half">
              <div className="fill-3"></div>
            </div>
            <div className="inside-circle"> 75% </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ProgressCircularBar;
