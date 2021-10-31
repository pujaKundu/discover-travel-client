import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { useParams } from "react-router";

const AddOrder = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [isUpdate, setIsUpdated] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://limitless-inlet-52700.herokuapp.com/orders", data)
      .then((res) => {
        console.log(res);
        alert("Booking completed successfully");
        reset();
      });
  };
  return (
    <div
      className="py-5"
      style={{ backgroundColor: "#d4d3cf", color: "#344e41" }}
    >
      <h1 className="display-4">Place your order here</h1>
      <form
        className="d-flex flex-column align-items-center justify-content-center my-5 mx-5 py-5"
        style={{ backgroundColor: "#344e41" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className=" my-2 w-75 rounded border-0 p-2"
          value={user.displayName}
          readOnly
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className=" my-2 w-75 rounded border-0 p-2"
          value={user.email}
          readOnly
          {...register("email", { required: true })}
        />
        <input
          className="my-2 w-75 rounded border-0 p-2"
          placeholder="Enter Destination"
          required
          {...register("destination")}
        />
        <input
          className="my-2 w-75 rounded border-0 p-2"
          placeholder="Enter Address"
          required
          {...register("address")}
        />

        <input
          className="my-2 w-75 rounded border-0 p-2"
          placeholder="Enter Date"
          required
          type="date"
          {...register("date")}
        />
        <input defaultValue="pending" type="hidden" {...register("state")} />
        <input
          className="px-5 py-2 mt-3 border-0 rounded-pill"
          style={{ backgroundColor: "rgb(190, 241, 112)" }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddOrder;
