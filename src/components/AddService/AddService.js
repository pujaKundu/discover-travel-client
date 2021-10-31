import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://limitless-inlet-52700.herokuapp.com/destinations", data)
      .then((res) => {
        console.log(res);
        alert("Task added successfully");
        reset();
      });
  };
  return (
    <div
      className="py-5"
      style={{ backgroundColor: "#d4d3cf", color: "#344e41" }}
    >
      <h1 className="pt-5 display-4">Add New Destination</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column align-items-center justify-content-center my-5"
      >
        <label className="text-left fs-4" htmlFor="">
          Add Destination
        </label>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          className="my-2 w-50  rounded border-0 p-2"
          placeholder="Destination"
        />
        <label className="text-left fs-4" htmlFor="">
          Add Description
        </label>
        <textarea
          className="my-2 w-50 rounded border-0 p-2"
          {...register("description")}
          placeholder="Description"
        />
        <label className="text-left fs-4" htmlFor="">
          Add Price
        </label>
        <input
          className="my-2 w-50 rounded border-0 p-2"
          {...register("price")}
          required
          placeholder="Price"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <label className="text-left fs-4" htmlFor="">
          Add Image Url
        </label>
        <input
          className="my-2 w-50 rounded border-0 p-2"
          {...register("url")}
          required
          placeholder="Image Url"
        />
        <label className="text-left fs-4" htmlFor="">
          Add Duration
        </label>
        <input
          className="my-2 w-50 rounded border-0 p-2"
          {...register("duration")}
          required
          placeholder="Duration"
        />
        <label className="text-left fs-4" htmlFor="">
          Add Maximum People
        </label>
        <input
          className="my-2 w-50 rounded border-0 p-2"
          {...register("maxPeople")}
          required
          placeholder="Maximum no. of People"
        />
        <label className="text-left fs-4" htmlFor="">
          Add Minimum Age
        </label>
        <input
          className="my-2 w-50 rounded border-0 p-2"
          {...register("Minimum Age")}
          required
          placeholder="Destination"
        />
        <label className="text-left fs-4" htmlFor="">
          Add Trip Type
        </label>
        <input
          className="my-2 w-50 rounded border-0 p-2"
          {...register("type")}
          required
          placeholder="Type"
        />
        <input
          className="btn rounded-pill px-5 py-3 mt-4"
          style={{ backgroundColor: "#344e41", color: "#d4d3cf" }}
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddService;
