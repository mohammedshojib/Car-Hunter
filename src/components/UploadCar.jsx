import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import { useForm } from "react-hook-form";

const UploadCar = () => {
  const [user, loading, errorHook] = useAuthState(auth);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/addcar`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("car added succsessfully");
      });
  };
  return (
    <div className="wrapper">
      <div className="text-center mt-4 name"> Add Cars </div>
      <form
        className=" form-field d-flex flex-column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="form-field d-flex align-items-center"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <textarea
          className="form-field d-flex align-items-center"
          placeholder="Description"
          required
          {...register("description")}
        />
        <input
          className="form-field d-flex align-items-center"
          placeholder="Price"
          type="number"
          required
          {...register("price")}
        />
        <input
          className="form-field d-flex align-items-center"
          placeholder="Quantity"
          type="number"
          required
          {...register("quantity")}
        />
        <input
          className="form-field d-flex align-items-center"
          placeholder="Photo URL"
          type="text"
          required
          {...register("img")}
        />
        <input type="submit" className="btn mt-3" value="Add Cars" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UploadCar;
