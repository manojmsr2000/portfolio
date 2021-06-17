import React from "react";

export const BounceUp = (props) => {
  return <div data-aos="fade-up">{props.children}</div>;
};

export const FadeRight = (props) => {
  return <div data-aos="fade-right">{props.children}</div>;
};

export const FadeLeft = (props) => {
  return <div data-aos="fade-left">{props.children}</div>;
};
