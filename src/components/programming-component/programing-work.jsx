import React from "react";

import { Row } from "react-bootstrap";
import { WorkCard } from "../work-card/WorkCard";
import { ProgrammingDetails } from "../../assets/Data/work-details";
import { BounceUp } from "../animations";

import { NavLink } from "react-router-dom";

const ProgrammingWork = (props) => {
  return (
    <div id="pp" className="dark-bg">
      <h1 className="work-title">Programming Projects</h1>
      <Row>
        {ProgrammingDetails.map(({ text, src, title }, index) => {
          return (
            index !== props.stopAt && (
              <WorkCard
                key={title}
                stopAt={props.stopAt}
                text={text}
                src={src}
                title={title}
              />
            )
          );
        })}
      </Row>
      <div>
        {props.stopAt === 3 && (
          <BounceUp>
            <NavLink to="/pp" className="btn btn-lg rounded-pill">
              Show More...
            </NavLink>
          </BounceUp>
        )}
      </div>
    </div>
  );
};

export default ProgrammingWork;
