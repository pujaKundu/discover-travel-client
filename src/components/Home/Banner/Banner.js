import React from "react";
import { Container } from "react-bootstrap";
import banner from "../../../images/Banner/banner-2.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Container
      className=" d-flex flex-column align-items-center justify-content-center"
      fluid
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <h1 className="display-2 banner-text animate__animated animate__fadeInDown">
        Discover the most amazing places
      </h1>
      <h3 className="text-white sub-text animate__animated animate__fadeInUp">
        Best places for your next travel are here check them out
      </h3>
    </Container>
  );
};

export default Banner;
