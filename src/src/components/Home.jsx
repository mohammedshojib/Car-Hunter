import React from "react";
import { FaArrowRight } from "react-icons/fa";
import carImg from "../assets/car.svg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="main">
      <div className="hero-main">
        <div className="hero">
          <h1>
            Wellcome To <br /> <span className="hero-text">Car Viter</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            possimus voluptas repudiandae expedita corporis nam in cum quod
            necessitatibus praesentium,
          </p>
          <a href="#" className="explore-btn">
            Explore Now <FaArrowRight />
          </a>
        </div>
        <div className="hero">
          <img src={carImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
