import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const AddOrder = () => {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/orders", data).then((res) => {
      console.log(res);
      alert("Task added successfully");
    });
  };
  return (
    <div>
      <h1>Place your order here</h1>
      <form
        className="d-flex flex-column align-items-center justify-content-center my-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className=" my-2 w-50"
          value={user.displayName}
          readOnly
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className=" my-2 w-50"
          value={user.email}
          readOnly
          {...register("email", { required: true })}
        />
        <input
          className="my-2 w-50"
          placeholder="Enter Address"
          required
          {...register("address")}
        />

        <input
          className="my-2 w-50"
          placeholder="Enter Date"
          required
          type="date"
          {...register("date")}
        />
        <input className="px-5" type="submit" />
      </form>
    </div>
  );
};

export default AddOrder;
