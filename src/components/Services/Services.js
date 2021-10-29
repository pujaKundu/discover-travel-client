import React, { useState, useEffect } from "react";
import { CardGroup, Container, Row, Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://limitless-inlet-52700.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
        setIsLoading(false);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });
  }, []);

  return (
    <Container>
      <p className="mt-5 mb-2 title">DON’T MISS</p>
      <h1 className="display-3  title">Our Offers</h1>
      <p className="mt-2 mb-5 title">
        Somewhere something amazing is waiting to be known
      </p>
      {isLoading && (
        <Spinner animation="border" className="my-5" variant="dark" />
      )}
      <Row xs={1} md={3} className="g-4">
        {services.map((service) => (
          <SingleService key={service._id} service={service}></SingleService>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
