import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./PopularTours.css";
import paris from "../../../images/paris-2.jpg";
import maldives from "../../../images/mal-2.jpg";
import nepal from "../../../images/nepal-2.jpg";
import seoul from "../../../images/seoul-2.jpg";

const PopularTours = () => {
  return (
    <Container
      fluid
      className="my-5"
      style={{
        backgroundColor: "#344e41",
      }}
    >
      <Row md={2} xs={1} className="popular-tours-container ps-5 py-5">
        <Col className="text-left">
          <h5>Popular Tours</h5>
          <h1 className="display-3">We promise it won't get boring.</h1>
        </Col>
        <Col>
          <p className="text-right pe-5 pt-5">
            Escape from the daily hustle and bustle and treat yourself to an
            unforgettable experience. Memories of summer adventures will feed
            your spirit and stay in you forever.
          </p>
        </Col>
      </Row>
      <Row md={4} xs={1} className="my-3 pb-5 tour-images">
        <Col>
          <img className="rounded shadow-lg my-2" src={paris} alt="" />
        </Col>
        <Col>
          <img className="rounded shadow-lg my-2" src={maldives} alt="" />
        </Col>
        <Col>
          <img className="rounded shadow-lg my-2" src={nepal} alt="" />
        </Col>
        <Col>
          <img className="rounded shadow-lg my-2" src={seoul} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default PopularTours;
