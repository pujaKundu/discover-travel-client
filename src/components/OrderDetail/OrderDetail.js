import React, { useEffect, useState } from "react";
import { Col, Card, Button } from "react-bootstrap";

const OrderDetail = () => {
  const [order, setOrder] = useState([]);
  const { name, address, _id, date, email } = order;
  useEffect(() => {
    fetch("https://limitless-inlet-52700.herokuapp.com/userOrders")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Col>
      <Card>
        <Card.Body>
          <Card.Title>{address}</Card.Title>
          <Card.Text>{date}</Card.Text>
          <Card.Text>{name}</Card.Text>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
        <Button variant="danger">Cancel</Button>
      </Card>
    </Col>
  );
};

export default OrderDetail;
