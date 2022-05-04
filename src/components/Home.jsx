import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { carsContext } from "../App";
import carImg from "../assets/car.svg";
import "../styles/Home.css";
import Cars from "./Cars";

const Home = () => {
  const [cars, setCars] = useContext(carsContext);
  const newCars = cars.slice(0, 6);
  console.log(newCars);

  return (
    <>
      <div className="main">
        <div className="hero">
          <div className="col ">
            <h1>
              Wellcome To <br /> <span className="hero-text">Car Hunter</span>
            </h1>
            <p>
              We are car hunter A K A second hand car listing + add our
              inventory, If you have best quality tesla car then added on our
              inventory.
            </p>
            <a href="#" className="explore-btn">
              Explore Now <FaArrowRight />
            </a>
          </div>
          <div className="col ">
            <img src={carImg} alt="" />
          </div>
        </div>
      </div>
      <div className="car-container">
        {newCars.map((car) => (
          <Cars car={car} key={car._id} />
        ))}
      </div>
      <div class="d-flex m-auto">
        <div class="container bg-dark d-flex justify-content-center text-center m-auto row rounded mt-5">
          <div class="col-lg-2 bg-danger rounded text-white m-4">
            <h2 class="mt-3">{cars.length}</h2>
            <p>Total Cars</p>
          </div>
          <div class="col-lg-2 bg-primary rounded text-white m-4">
            <h2 class="mt-3">500+</h2>
            <p>Cars Delivered</p>
          </div>
          <div
            class="col-lg-2 rounded text-white m-4"
            style={{ backgroundColor: "#6d51e7" }}
          >
            <h2 class="mt-3">100+</h2>
            <p>Total User</p>
          </div>
          <div
            class="col-lg-2 rounded text-white m-4"
            style={{ backgroundColor: "#ff9900" }}
          >
            <h2 class="mt-3">100+</h2>
            <p>Special Items</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
