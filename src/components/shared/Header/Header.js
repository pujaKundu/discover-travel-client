import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/mountain-travel-man-retro-emblem-man-mountain-peak-logo_1284-53130.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar className="nav-color" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-light fs-3">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top rounded"
            />{" "}
            <span className="name-color">Discover</span>{" "}
            <span className="text-gray">Travel</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-white" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
