import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.init";
import { useForm } from "react-hook-form";

const UploadCar = () => {
  const [user, loading, errorHook] = useAuthState(auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const addCar = {
      email: user.email,
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      img: event.target.img.value,
    };

    const url = `http://localhost:5000/addcar`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCar),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("car added succsessfully");
      });
  };
  return (
    <div className="wrapper">
      <div className="text-center mt-4 name"> Add Cars </div>
      <form className=" form-field d-flex flex-column" onSubmit={handleSubmit}>
        <input
          className="form-field d-flex align-items-center"
          placeholder="Name"
          name="name"
        />
        <textarea
          className="form-field d-flex align-items-center"
          placeholder="Description"
          required
          name="description"
        />
        <input
          className="form-field d-flex align-items-center"
          placeholder="Price"
          type="number"
          required
          name="price"
        />
        <input
          className="form-field d-flex align-items-center"
          placeholder="Quantity"
          type="number"
          required
          name="quantity"
        />
        <input
          className="form-field d-flex align-items-center"
          placeholder="Photo URL"
          type="text"
          required
          name="img"
        />
        <input type="submit" className="btn mt-3" value="Add Cars" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default UploadCar;
