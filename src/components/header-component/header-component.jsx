import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";

import "./header-component.scss";
import HeaderLinks, { SocialLinks } from "../../assets/Data/Navbar-data";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Nav, Navbar } from "react-bootstrap";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar
      className="dark-bg"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
    >
      <Navbar.Brand href="/">MS</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} size={40} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {HeaderLinks.map((link) => {
            return (
              <NavLink
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                    setOpen(false);
                  }, 150)
                }
                key={link.id}
                className="nav-link"
                activeClassName="selected"
                exact
                to={link.link}
                activeStyle={{ color: "white" }}
              >
                {link.title}
              </NavLink>
            );
          })}
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="social-navbar-nav">
        <Nav className="ml-auto flex-row flex-wrap ml-mr-auto justify-content-center">
          {SocialLinks.map((link) => (
            <Nav.Link
              key={link.id}
              onClick={() => {
                setTimeout(() => {
                  setExpanded(false);
                  setOpen(false);
                }, 150);
                window.open(link.link);
                return false;
              }}
            >
              <FontAwesomeIcon icon={link.icon} size="lg" />
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
