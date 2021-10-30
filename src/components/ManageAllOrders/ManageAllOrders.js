import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SingleOrder from "../singleOrder/SingleOrder";

const ManageAllOrders = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://limitless-inlet-52700.herokuapp.com/userOrders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      <h1 className="display-3  title">Manage your orders here</h1>

      {isLoading && (
        <Spinner animation="border" className="my-5" variant="dark" />
      )}
      <Row xs={1} md={3} className="g-4">
        {bookings.map((booking) => (
          <SingleOrder key={booking._id} booking={booking}></SingleOrder>
        ))}
      </Row>
    </Container>
  );
};

export default ManageAllOrders;
