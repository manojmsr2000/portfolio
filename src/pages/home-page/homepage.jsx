import React from "react";

import "./homepage.scss";

import { Container, Row, Col, Button } from "react-bootstrap";
import ThreeDWork from "../../components/three-d-component/three-d-component";
import ProgrammingWork from "../../components/programming-component/programing-work";

const HomePage = () => {
  return (
    <div className="homepage">
      <Container>
        <Row className="py-4">
          <Col lg="6" className="mx-auto">
            <h1>Manoj Singh</h1>
            <h2>Programmer / 3D Artist</h2>
            <h3>
              I'm a Full Stack Developer who does 3D modelling on the side.
            </h3>
            <h3>Experienced in... </h3>
            <em>
              {" "}
              <h5>C++, Python, Java, Javascript..</h5>{" "}
            </em>
            <em>
              {" "}
              <h5>Blender, Substance Painter, Photoshop</h5>{" "}
            </em>
            <Button
              variant="default"
              size="lg"
              className="rounded-pill"
              onClick={() => document.getElementById("pp").scrollIntoView()}
            >
              Show Programming Projects
            </Button>
            <Button
              variant="default"
              size="lg"
              className="rounded-pill"
              onClick={() => document.getElementById("threed").scrollIntoView()}
            >
              Show 3D Projects
            </Button>
          </Col>
        </Row>
      </Container>
      <ProgrammingWork stopAt={3} />
      <ThreeDWork stopAt={3} />
    </div>
  );
};

export default HomePage;
