import React from "react";
import { useNavigate } from "react-router-dom";

const Cars = ({ car }) => {
  const navigate = useNavigate();

  return (
    <div className="car-card">
      <img src={car.img} alt="" />
      <h6>{car.name}</h6>
      <p>{car.description}</p>
      <a className="btn" onClick={() => navigate(`/car/${car._id}`)}>
        Read More
      </a>
    </div>
  );
};

export default Cars;
