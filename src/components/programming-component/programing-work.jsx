import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";
import { ProgrammingDetails } from "../../assets/Data/work-details";
import { BounceUp } from "../animations";

import { NavLink } from "react-router-dom";

const ProgrammingWork = (props) => (
  <div id="pp" className="dark-bg">
    <BounceUp>
      <h1 className="work-title">Programming Projects</h1>
    </BounceUp>
    <Row>
      {ProgrammingDetails.map((detail, index) => {
        if (index !== props.stopAt) {
          return (
            <Col key={index} lg={`${props.stopAt === 3 ? "4" : "6"}`} md="6">
              <BounceUp delay={1000}>
                <NavLink
                  style={
                    detail.text
                      ? { textDecoration: "none" }
                      : { textDecoration: "none", cursor: "default" }
                  }
                  to={detail.text ? `/pp/${detail.title}` : "#"}
                >
                  <Card className="dark-bg grow-rotate">
                    <Card.Img
                      className="grow"
                      variant="top"
                      src={detail.src}
                      alt="card-image"
                    />
                    <Card.Body>
                      <Card.Title>{detail.title}</Card.Title>
                      <Card.Text>{detail.text}</Card.Text>
                      {detail.text && (
                        <Button
                          variant="default"
                          className="rounded-pill"
                          size="lg"
                        >
                          View More
                        </Button>
                      )}
                    </Card.Body>
                  </Card>
                </NavLink>
              </BounceUp>
            </Col>
          );
        } else {
          return "";
        }
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

export default ProgrammingWork;
