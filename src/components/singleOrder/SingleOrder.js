import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";

const SingleOrder = () => {
  const [bookings, setBookings] = useState([]);
  const [order, setOrder] = useState({});
  //const { name, address, email, date, destination, _id } = props.booking || {};
  useEffect(() => {
    fetch("https://discover-travel-api.onrender.com/userOrders")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleCancelBooking = (id) => {
    console.log("delted", id);

    const proceed = window.confirm(
      "Are you sure , you want to cancel booking?"
    );
    if (proceed) {
      const url = `https://discover-travel-api.onrender.com/userOrders/${id}`;
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
    fetch(`https://discover-travel-api.onrender.com/userOrders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
          alert("Updated");

          // order.state = "Approved";
          // bookings.map((booking) => {
          //   console.log(booking);
          //   booking.state = "Approved";
          // });
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
                  <span className="text-uppercase">{booking?.state}</span>
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
        ))}
      </div>
    </div>
  );
};

export default SingleOrder;
