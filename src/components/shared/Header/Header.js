import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../../images/mountain-travel-man-retro-emblem-man-mountain-peak-logo_1284-53130.jpg";
import "./Header.css";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { user, logout } = useAuth();
  console.log(user.email);
  return (
    <div>
      <Navbar className="nav-color" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home" className="text-light fs-3">
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top rounded"
            />{" "}
            <span className="name-color">Discover</span>{" "}
            <span className="text-gray">Travels</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-white" as={Link} to="/home">
                Home
              </Nav.Link>
              {user.email && (
                <Nav.Link className="text-white" as={Link} to="/myOrders">
                  My Bookings
                </Nav.Link>
              )}
              {user.email && (
                <div className="">
                  <NavDropdown
                    className="btn-light rounded fs-6"
                    title="Dashboard"
                    id="basic-nav-dropdown"
                  >
                    <NavDropdown.Item as={Link} to="/manageOrders">
                      Manage Bookings
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/addService">
                      Add Destination
                    </NavDropdown.Item>
                  </NavDropdown>

                  {/* <Nav.Link className="text-white" as={Link} to="/manageOrders">
                    Manage Bookings
                  </Nav.Link>
                  <Nav.Link className="text-white" as={Link} to="/addService">
                    Add Service
                  </Nav.Link> */}
                </div>
              )}
              {user.email && (
                <div>
                  <span className="text-light mx-2 text-uppercase">
                    {user.displayName}{" "}
                  </span>
                  <img
                    src={user.photoURL}
                    width="40"
                    height="40"
                    className="rounded-circle mx-2"
                    alt=""
                  />
                </div>
              )}
              {user.email ? (
                <Button onClick={logout} variant="light">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Log out
                </Button>
              ) : (
                <Nav.Link className="text-white" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
