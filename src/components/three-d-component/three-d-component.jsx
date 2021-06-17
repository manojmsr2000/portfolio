import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { BounceUp } from "../animations";

import ThreeDDetails from "../../assets/Data/work-details";

const ThreeDWork = (props) => (
  <div id="threed" className="dark-bg">
    <BounceUp>
      <h1 className="work-title">3D Projects</h1>
    </BounceUp>
    <Row>
      {ThreeDDetails.map((detail, index) => {
        if (index !== props.stopAt) {
          return (
            <Col key={index} lg={`${props.stopAt === 3 ? "4" : "6"}`} md="6">
              <BounceUp>
                <NavLink
                  style={
                    detail.text
                      ? { textDecoration: "none" }
                      : { textDecoration: "none", cursor: "default" }
                  }
                  to={detail.text ? `/threed/${detail.title}` : "#"}
                >
                  <Card className="dark-bg grow-rotate">
                    <Card.Img variant="top" src={detail.src} alt="card-image" />
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
          <NavLink to="/threed" className="btn btn-lg rounded-pill">
            Show More...
          </NavLink>
        </BounceUp>
      )}
    </div>
  </div>
);

export default ThreeDWork;
