import React, { useState, useEffect } from "react";
import { Col, Card, Button, Table } from "react-bootstrap";
import { useParams } from "react-router";

const SingleOrder = (props) => {
  const [bookings, setBookings] = useState([]);
  const [order, setOrder] = useState({});
  const { name, address, email, date, destination, _id } = props.booking || {};
  useEffect(() => {
    fetch("https://limitless-inlet-52700.herokuapp.com/userOrders")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleCancelBooking = (id) => {
    console.log("delted", id);

    const proceed = window.confirm(
      "Are you sure , you want to cancel booking?"
    );
    if (proceed) {
      const url = `https://limitless-inlet-52700.herokuapp.com/userOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Successfully deleted");
            const remainingBookings = bookings.filter(
              (booking) => booking._id !== id
            );
            setBookings(remainingBookings);
          }
        });
    }
  };

  const handleUpdateBooking = (id) => {
    fetch(`https://limitless-inlet-52700.herokuapp.com/userOrders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
          alert("updated");
          // console.log(order);
          order.state = "Approved";
        } else {
          alert("Not updated");
        }
        //setBookings(order);
      });
  };
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        {bookings.map((booking) => (
          <Table striped bordered hover size="sm" className="table-responsive">
            <thead style={{ backgroundColor: "#344e41", color: "#d4d3cf" }}>
              <tr>
                <th>Destination</th>
                <th>Booking Detail</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-4">{booking?.destination}</td>
                <td>
                  {booking?.name}
                  <br />

                  {booking?.email}
                  <br />

                  {booking?.date}
                  <br />

                  {booking?.state}
                </td>

                <td className="pt-4">
                  <Button
                    className="mb-2"
                    onClick={() => handleCancelBooking(booking._id)}
                    variant="danger"
                  >
                    Cancel
                  </Button>
                  <br />
                  <Button
                    onClick={() => handleUpdateBooking(booking._id)}
                    variant="success"
                  >
                    Approve
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>

          // <div
          //   key={booking._id}
          //   className="my-3 d-flex "
          //   style={{
          //     backgroundColor: "#d4d3cf",
          //     padding: "2% 6%",
          //     textAlign: "left",
          //   }}
          // >
          //   <h2 className="px-4 border border-right">{booking?.destination}</h2>
          //   <p className="px-4 border border-right">
          //     <span className="fw-bold fs-6">Date: </span>
          //     {booking?.date}
          //   </p>
          //   <p>
          //     <span className="fw-bold fs-6">Booked By: </span>
          //     {booking?.name}
          //   </p>
          //   <p>
          //     <span className="fw-bold fs-6">Email:</span>
          //     {booking?.email}
          //   </p>
          //   <p>
          //     <span className="fw-bold fs-6">Address:</span>
          //     {booking?.address}
          //   </p>

          //   <button
          //     onClick={() => handleCancelBooking(booking._id)}
          //     className="btn btn-danger"
          //   >
          //     Cancel
          //   </button>
          // </div>
        ))}
      </div>
    </div>
    // <Col>
    //   <Card className="h-100" style={{ borderRadius: "8%", margin: "6%" }}>
    //     <Card.Body className="text-left ps-4">
    //       <Card.Title className="fw-bold">{destination}</Card.Title>
    //       <Card.Text>
    //         Date: {date}
    //         <br />
    //         Location: {address}
    //         <br />
    //         Booked By: {name}
    //         <hr />
    //         <br />
    //         Email: {email}
    //       </Card.Text>
    //       <Button onClick={() => handleCancelBooking(_id)} variant="danger">
    //         Cancel
    //       </Button>
    //     </Card.Body>
    //   </Card>
    // </Col>
  );
};

export default SingleOrder;
