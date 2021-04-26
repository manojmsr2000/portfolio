import React from "react";

import { Row, Col, Card, Button } from "react-bootstrap";
import { ProgrammingDetails } from "../../assets/Data/work-details";

import { NavLink } from "react-router-dom";

const ProgrammingWork = (props) => (
  <div id="pp" className="dark-bg">
    <h1 className="work-title">Programming Projects</h1>
    <Row>
      {ProgrammingDetails.map((detail, index) => {
        if (index !== props.stopAt) {
          return (
            <Col key={index} lg={`${props.stopAt === 3 ? "4" : "6"}`} md="6">
              <Card className="dark-bg">
                <Card.Img variant="top" src={detail.src} />
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
            </Col>
          );
        } else {
          return "";
        }
      })}
    </Row>
    <div>
      {props.stopAt === 3 && (
        <NavLink to="/pp" className="btn btn-lg rounded-pill">
          Show More...
        </NavLink>
      )}
    </div>
  </div>
);

export default ProgrammingWork;
