import React from "react";
import "./single-pages.scss";

import { projectDetails } from "../../assets/Data/single-page-details";
import { Col, Row, Carousel } from "react-bootstrap";
import { BounceUp } from "../../components/animations";

const singlePages = ({ match }) => {
  const details = projectDetails[match.params.id];

  if (details) {
    const {
      description,
      brief,
      techs,
      resources,
      images,
      sofs,
      completionDate,
    } = details;

    return (
      <div id="singlepage" className="dark-bg mt-3 text-light">
        <Row>
          <Col lg={12} className="mb-2 pt-5">
            <h1 className="work-title">
              <strong>{match.params.id}</strong>
            </h1>
            <p>{description}</p>
          </Col>
          <Col lg={12}>
            <Carousel
              pause="hover"
              className="d-flex"
              indicators={false}
              controls={images.length > 1}
            >
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img className="d-flex w-100" src={image} alt="slide-imgs" />
                </Carousel.Item>
              ))}
              {resources.youtubelink && (
                <Carousel.Item>
                  <iframe
                    src={resources.youtubelink}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Carousel.Item>
              )}
            </Carousel>
          </Col>
          <Col lg={12}>
            <BounceUp>
              <h2 className="pt-5">
                <strong>About this project</strong>
              </h2>
              <hr />
            </BounceUp>
            <BounceUp>
              <p>{brief}</p>
            </BounceUp>
            <br />
            <BounceUp>
              <p>
                <strong>Completed On: </strong>
                <em>{completionDate}</em>
              </p>
            </BounceUp>
          </Col>
          <Col lg={12}>
            <BounceUp>
              <h2 className="pt-5">
                <strong>Technical Sheet</strong>
              </h2>
            </BounceUp>
            {techs && (
              <BounceUp>
                <p>
                  Code technologies I got involved in while working on this
                  project
                </p>{" "}
                <hr />
                <ul>
                  {techs.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </BounceUp>
            )}

            {sofs && (
              <BounceUp>
                <p>Softwares I used for the project</p>

                <hr />
                <ul>
                  {sofs.map((sof, index) => (
                    <li key={index}>{sof}</li>
                  ))}
                </ul>
              </BounceUp>
            )}
          </Col>
          {resources && (
            <Col lg={12}>
              <BounceUp>
                <h2 className="pt-5">
                  <strong>Resources</strong>
                </h2>
                <hr />
              </BounceUp>
              {resources.hosted && (
                <BounceUp>
                  <p>
                    The website is currently hosted at :{" "}
                    <a href={resources.hosted}>{resources.hosted}</a>
                  </p>
                </BounceUp>
              )}

              {resources.github && (
                <BounceUp>
                  <p>
                    Github Link :{" "}
                    <a href={resources.github}>{resources.github}</a>
                  </p>
                </BounceUp>
              )}
            </Col>
          )}
        </Row>
      </div>
    );
  } else {
    return (
      <div id="singlepage" className="dark-bg mt-5 text-light text-center">
        <h1 className="text-center">
          404 Not Found. Page doesn't exist {":("}
        </h1>
      </div>
    );
  }
};

export default singlePages;
