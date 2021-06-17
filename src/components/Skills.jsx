import React from "react";
import { ProgressBar } from "react-bootstrap";
import { FadeRight } from "./animations";

const Skills = ({ type }) => {
  const skills = [
    "Python",
    "Javascript",
    "C++",
    "Java",
    "Node.js",
    "React",
    "MongoDB",
  ];
  const skillpercent = [60, 60, 50, 50, 50, 40, 40];
  const softskills = ["Blender", "Substance Painter", "Adobe Photoshop"];
  const softskillpercent = [50, 40, 25];
  if (type === "programming") {
    return (
      <>
        {skills.map((skill, index) => (
          <FadeRight>
            <p className="skill-name" key={index}>
              {skill}
              <span className="percent">{skillpercent[index]}%</span>
            </p>
            <ProgressBar now={skillpercent[index]} />
          </FadeRight>
        ))}
      </>
    );
  } else if (type === "software") {
    return (
      <>
        {softskills.map((skill, index) => (
          <FadeRight>
            <p className="skill-name" key={index}>
              {skill}
              <span className="percent">{softskillpercent[index]}%</span>
            </p>
            <ProgressBar now={softskillpercent[index]} />
          </FadeRight>
        ))}
      </>
    );
  }
};

export default Skills;
