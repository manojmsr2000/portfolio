import React from "react";
import { ProgressBar } from "react-bootstrap";
import { FadeRight } from "./animations";

const Skills = ({ type }) => {
  const skills = [
    "React",
    "Node.js",
    "Python",
    "Javascript",
    "C++",
    "Java",
    "AWS Services",
  ];
  const skillpercent = [80, 70, 60, 80, 70, 70, 50];
  const softskills = ["Blender", "Substance Painter", "Adobe Photoshop"];
  const softskillpercent = [50, 60, 40];
  if (type === "programming") {
    return (
      <>
        {skills.map((skill, index) => (
          <FadeRight key={skill}>
            <p className="skill-name">
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
          <FadeRight key={skill}>
            <p className="skill-name" >
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
