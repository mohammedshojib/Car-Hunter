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
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      img: event.target.img.value,
    };
    //<===== UPLOAD CAR ====>
    const url = `https://fast-fjord-98215.herokuapp.com/addcar`;
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

    //<===== MY CARS ====>
    const myCars = {
      email: user.email,
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      img: event.target.img.value,
    };
    const myCarsurl = `https://fast-fjord-98215.herokuapp.com/mycars`;
    fetch(myCarsurl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myCars),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    event.target.reset();
  };

  //<===== error ====>
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
