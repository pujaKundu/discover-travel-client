import React from "react";
import { useState, useEffect } from "react";
import { Card, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "./SingleService.css";
import { useHistory } from "react-router";

const dollar = <FontAwesomeIcon icon={faDollarSign} />;

const SingleService = (props) => {
  const { _id, name, description, url, price } = props.service || {};
  const history = useHistory();
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    fetch("https://limitless-inlet-52700.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleService(data);
      });
  }, []);

  //explore now button handler
  const handleExploreBtn = (id) => {
    const url = `/seviceDetail/${id}`;
    history.push(url);
  };
  return (
    <Col>
      <Card
        className="h-100 single-card"
        style={{ borderRadius: "8%", margin: "6%" }}
      >
        <Card.Img
          variant="top"
          src={url}
          className="img-fluid  mx-auto card-img"
        />
        <Card.Body className="text-left ps-4 card-bg">
          <Card.Title className="fw-bold">{name}</Card.Title>
          <Card.Text>
            {dollar} {price}
          </Card.Text>
          <hr />
          <Card.Text>{description}</Card.Text>
          <Button
            onClick={() => handleExploreBtn(_id)}
            className="btn-decoration"
          >
            Explore now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleService;
