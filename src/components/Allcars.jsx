import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { carsContext } from "../App";
import Cars from "./Cars";
import "react-toastify/dist/ReactToastify.css";

const Allcars = () => {
  const [cars, setCars] = useContext(carsContext);
  return (
    <div className="car-container">
      {cars.map((car) => (
        <Cars car={car} key={car._id} />
      ))}{" "}
      <ToastContainer />
    </div>
  );
};

export default Allcars;
