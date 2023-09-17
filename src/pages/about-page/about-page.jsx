import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import prof from "../../assets/images/prof.jpg";
import Skills from "../../components/Skills";
import { FadeLeft } from "../../components/animations";

import "./about-page.scss";

const AboutPage = () => (
  <div id="about" className="dark-bg">
    <h1 className="work-title">About Page</h1>
    <Row>
      <Col lg={4} className="pb-5">
        <Image src={prof} alt="profile-pic" width="50%" rounded />
      </Col>
      <Col lg={8}>
        <p className="about-me">
          I'm a{" "}
          {Math.floor(
            (new Date() - new Date("2000-02-16").getTime()) / 3.15576e10
          )}{" "}
          year old Full Stack developer with keen interest in in game
          development, which has led me to explore both programming and 3D
          modeling.
          <br /> I love messing around with code and 3D stuff for fun and
          learning. I'm always trying to discover new stuff to make my code look
          and perform better. And hey, who knows, maybe I'll sculpt my way into the 3D hall of fame as well!"
        </p>
      </Col>
      <Col lg={12}>
        <br />
        <FadeLeft>
          <h2>Programming / Technical Skills</h2>
          <p>My Skill levels in languages/frameworks/services</p>
          <hr />
        </FadeLeft>

        <Skills type="programming" />
        <br />
        <FadeLeft>
          <h2>Professional Software Skills</h2>
          <p>My Skill levels in different applications</p>
          <hr />
        </FadeLeft>

        <Skills type="software" />
      </Col>
    </Row>
  </div>
);

export default AboutPage;
