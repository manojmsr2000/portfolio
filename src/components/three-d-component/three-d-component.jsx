import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import ThreeDDetails from "../../assets/Data/work-details";

const ThreeDWork = (props) => (
  <div id="threed" className="dark-bg">
    <h1 className="work-title">3D Projects</h1>
    <Row>
      {ThreeDDetails.map((detail, index) => {
        if (index !== props.stopAt) {
          return (
            <Col key={index} lg={`${props.stopAt === 3 ? "4" : "6"}`} md="6">
              <NavLink to="/pp">
                <Card className="dark-bg">
                  <Card.Img variant="top" src={detail.src} alt="card-image" />
                  <Card.Body>
                    <Card.Title>{detail.title}</Card.Title>
                    <Card.Text>{detail.text}</Card.Text>
                    {detail.text ? (
                      <Button
                        variant="default"
                        className="rounded-pill"
                        size="lg"
                      >
                        Go somewhere
                      </Button>
                    ) : (
                      ""
                    )}
                  </Card.Body>
                </Card>
              </NavLink>
            </Col>
          );
        } else {
          return "";
        }
      })}
    </Row>
    <div>
      {props.stopAt === 3 && (
        <NavLink to="/threed" className="btn btn-lg rounded-pill">
          Show More...
        </NavLink>
      )}
    </div>
  </div>
);

export default ThreeDWork;
