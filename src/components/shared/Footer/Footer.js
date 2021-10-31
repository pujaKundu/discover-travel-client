import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../../../images/mountain-travel-man-retro-emblem-man-mountain-peak-logo_1284-53130.jpg";
import payment from "../../../images/pay.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const location = <FontAwesomeIcon icon={faLocationArrow} />;
const phone = <FontAwesomeIcon icon={faPhone} />;
const envelop = <FontAwesomeIcon icon={faEnvelope} />;
const copyright = <FontAwesomeIcon icon={faCopyright} />;

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#344e41",
        marginBottom: "0px",
      }}
    >
      <div className="py-5">
        <h3>
          <img
            src={logo}
            width="40"
            height="40"
            className="rounded me-2"
            alt=""
          />
          <span className="name-color me-1">Discover</span>
          <span style={{ color: "#d4d3cf" }}>Travels</span>
        </h3>
        <span
          style={{ color: "#d4d3cf", textAlign: "center", fontSize: "32px" }}
        >
          <FontAwesomeIcon className="me-3" icon={faFacebook} />
          <FontAwesomeIcon className="me-3" icon={faInstagram} />
          <FontAwesomeIcon className="me-3" icon={faYoutube} />
        </span>
      </div>
      <Row md={2} xs={1}>
        <Col
          style={{
            color: "#d4d3cf",
            textAlign: "left",
            paddingLeft: "12%",
            paddingBottom: "2%",
          }}
        >
          <p>{location} Mirpur-2,Dhaka</p>
          <p>{phone} +880 1700000000</p>
          <p>{envelop} info@discover-travels.com</p>
        </Col>
        <Col>
          <img className="rounded" src={payment} alt="" />
        </Col>
      </Row>
      <Row>
        <p
          className="text-center py-4"
          style={{ color: "#d4d3cf", textAlign: "center" }}
        >
          {copyright} All rights reserved by Discover Travels,2021
        </p>
      </Row>
    </Container>
  );
};

export default Footer;
