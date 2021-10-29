import React from "react";
import { useState, useEffect } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./SingleService.css";

const dollar = <FontAwesomeIcon icon={faDollarSign} />;

const SingleService = (props) => {
  const { name, description, url, price } = props.service;
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    fetch("https://limitless-inlet-52700.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleService(data);
      });
  }, []);
  return (
    <Col>
      <Card className="h-100 rounded">
        <Card.Img
          variant="top"
          src={url}
          className="img-fluid w-75 mx-auto mt-3"
        />
        <Card.Body className="text-left ms-4">
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {dollar} {price}
          </Card.Text>
          <Card.Text>{description}</Card.Text>
          <Button variant="success">Explore now</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleService;
