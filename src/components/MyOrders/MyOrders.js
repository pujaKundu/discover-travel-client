import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("https://limitless-inlet-52700.herokuapp.com/userOrders")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setIsLoading(false);
      });
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

  return (
    <div>
      {user?.email && <h1>My Bookings</h1>}
      {isLoading && (
        <Spinner animation="border" className="my-5" variant="dark" />
      )}
      <div className="d-flex flex-column align-items-center justify-content-center">
        {bookings.map((booking) =>
          booking.email == user.email ? (
            <div
              key={booking._id}
              className="my-3"
              style={{
                backgroundColor: "#d4d3cf",
                padding: "2% 6%",
                textAlign: "left",
              }}
            >
              <h2>{booking?.destination}</h2>
              <p>
                <span className="fw-bold fs-6">Date: </span>
                {booking?.date}
              </p>
              <p>
                <span className="fw-bold fs-6">Booked By: </span>
                {booking?.name}
              </p>
              <p>
                <span className="fw-bold fs-6">Email:</span>
                {booking?.email}
              </p>
              <p>
                <span className="fw-bold fs-6">Address:</span>
                {booking?.address}
              </p>
              <p>
                <span className="fw-bold fs-6">State:</span>
                {booking?.state}
              </p>

              <button
                onClick={() => handleCancelBooking(booking._id)}
                className="btn btn-danger"
              >
                Cancel
              </button>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default MyOrders;
