import React from "react";

import { Row } from "react-bootstrap";
import { WorkCard } from "../work-card/WorkCard";
import { NavLink } from "react-router-dom";

import { BounceUp } from "../animations";

import ThreeDDetails from "../../assets/Data/work-details";

const ThreeDWork = (props) => (
  <div id="threed" className="dark-bg">
      <h1 className="work-title">3D Projects</h1>
    <Row>
      {ThreeDDetails.map(({ text, src, title }, index) => {
        if (index !== props.stopAt) {
          return <WorkCard key={index} stopAt={props.stopAt} text={text} src={src} title={title} />;
        } else {
          return "";
        }
      })}
    </Row>
    <div>
      {props.stopAt === 3 && (
        <BounceUp>
          <NavLink to="/threed" className="btn btn-lg rounded-pill">
            Show More...
          </NavLink>
        </BounceUp>
      )}
    </div>
  </div>
);

export default ThreeDWork;
