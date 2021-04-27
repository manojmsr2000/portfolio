import React from "react";

import { SocialLinks } from "../../assets/Data/Navbar-data";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="dark-bg mr-ml-auto" id="footer">
      <p>
        Contact :{" "}
        <a href="mailto:manojsinghmsr2000@gmail.com">
          {" "}
          manojsinghmsr2000@gmail.com{" "}
        </a>
      </p>
      <Nav className="flex-row flex-wrap mr-ml-auto justify-content-center">
        {SocialLinks.map((link) => (
          <Nav.Link
            key={link.id}
            onClick={() => {
              window.open(link.link);
              return false;
            }}
          >
            <FontAwesomeIcon icon={link.icon} />
          </Nav.Link>
        ))}
      </Nav>
      <p className="py-3">© MS {year}</p>
    </div>
  );
};
export default Footer;
