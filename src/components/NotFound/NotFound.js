import React from "react";
import { Container } from "react-bootstrap";
import error from "../../images/404.jpg";

const NotFound = () => {
  return (
    <Container fluid>
      <img src={error} alt="" />
    </Container>
  );
};

export default NotFound;
