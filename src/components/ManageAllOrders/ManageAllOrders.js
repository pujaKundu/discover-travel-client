import React, { useState, useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SingleOrder from "../singleOrder/SingleOrder";

const ManageAllOrders = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://discover-travel-api.onrender.com/userOrders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container className="my-5">
      <h1 className="display-3 py-3" style={{ color: "#344e41" }}>
        Manage your orders here:{bookings.length}
      </h1>

      {isLoading && (
        <Spinner animation="border" className="my-5" variant="dark" />
      )}

      <SingleOrder></SingleOrder>
    </Container>
  );
};

export default ManageAllOrders;
