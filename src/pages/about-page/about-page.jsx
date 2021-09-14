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
          I'm a 22 year old Computer Science student currently pursuing B.Tech
          {"(4th year)"} in Sikkim Manipal Institute of Technology. I've always
          been interested in game development, which is why I took a liking to
          both programming and 3D Modelling.
          <br /> I do these projects for fun and for learning experience. I'm
          always looking to improve my skills as a programmer and as a 3D
          artist.
        </p>
      </Col>
      <Col lg={12}>
        <br />
        <FadeLeft>
          <h2>Programming / Technical Skills</h2>
          <p>My Skill levels in different languages/frameworks</p>
          <hr />
        </FadeLeft>

        <Skills type="programming" />
        <br />
        <FadeLeft>
          <h2>Professional Software Skills</h2>
          <p>My Skill levels in different softwares</p>
          <hr />
        </FadeLeft>

        <Skills type="software" />
      </Col>
    </Row>
  </div>
);

export default AboutPage;
