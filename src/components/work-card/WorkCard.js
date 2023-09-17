import React from "react";

import { Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BounceUp } from "../animations";

export const WorkCard = ({ text, src, title, stopAt }) => (
  <Col lg={`${stopAt === 3 ? "4" : "6"}`} md="6">
    <BounceUp>
      <NavLink
        style={
          text
            ? { textDecoration: "none" }
            : { textDecoration: "none", cursor: "default" }
        }
        to={text ? `/threed/${title}` : "#"}
      >
        <Card className="dark-bg grow-rotate">
          <Card.Img variant="top" src={src} alt="card-image" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    </BounceUp>
  </Col>
);
