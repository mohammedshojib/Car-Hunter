import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { carsContext } from "../App";
import Cars from "./Cars";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Allcars = () => {
  const navigate = useNavigate();
  const [cars, setCars] = useContext(carsContext);
  return (
    <div className="car-container">
      {cars.length ? (
        ""
      ) : (
        <div className="text-center">
          <div class="spinner-border  " role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {cars.map((car) => (
        <Cars car={car} key={car._id} />
      ))}
      {cars.length === 0 ? (
        <div className="text-center mt 5">
          <h1>No Cars avaiable</h1>
          <button onClick={() => navigate("/upload-car")} className="btn">
            Add Car
          </button>
        </div>
      ) : (
        ""
      )}
      <ToastContainer />
    </div>
  );
};

export default Allcars;
