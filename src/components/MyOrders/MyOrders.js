import React, { useState, useEffect } from "react";

const MyOrders = () => {
  const [bookings, setBookings] = useState([]);
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

  // useEffect(() => {
  //       fetch(`https://limitless-inlet-52700.herokuapp.com/services`)
  //         .then((res) => res.json())
  //         .then((data) => setDetail(data));
  //     }, []);

  return (
    <div>
      <h1>My Bookings:{bookings.length}</h1>
      <div className="d-flex flex-column align-items-center justify-content-center">
        {bookings.map((booking) => (
          <div key={booking._id} className="my-3 order-card">
            <h1>{booking.address}</h1>
            <p>{booking.date}</p>
            <p>{booking.name}</p>
            <p>{booking.email}</p>
            <button
              onClick={() => handleCancelBooking(booking._id)}
              className="btn btn-danger"
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
