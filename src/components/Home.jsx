import React from "react";
import { FaArrowRight } from "react-icons/fa";
import carImg from "../assets/car.svg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="hero">
        <div className="col ">
          <h1>
            Wellcome To <br /> <span className="hero-text">Car Hunter</span>
          </h1>
          <p>
            We are car hunter A K A second hand car listing + add our inventory,
            If you have best quality tesla car then added on our inventory.
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
  );
};

export default Home;
