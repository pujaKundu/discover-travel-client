import React, { useState, useEffect } from "react";
import { CardGroup, Container, Row } from "react-bootstrap";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://limitless-inlet-52700.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <Container>
      <h1 className="display-3 my-5 title">Our Offers</h1>

      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <SingleService key={service.key} service={service}></SingleService>
        ))}
      </Row>
      <CardGroup></CardGroup>
    </Container>
  );
};

export default Services;
