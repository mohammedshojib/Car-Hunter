import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { carsContext } from "../App";
import carImg from "../assets/car.svg";
import "../styles/Home.css";
import Cars from "./Cars";
import HeroBanner from "./HeroBanner";

const Home = () => {
  const [cars, setCars] = useContext(carsContext);
  const newCars = cars.slice(0, 6);
  const navigate = useNavigate();

  return (
    <>
      <div className="main mb-5">
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
            <img
              className="img-fluid"
              src="https://i.pinimg.com/originals/72/45/df/7245dfbd681c60ae0db4bc7f2b2c1a0f.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="car-container">
        {newCars.map((car) => (
          <Cars car={car} key={car._id} />
        ))}
      </div>
      <div className="text-center mt-5">
        <button onClick={() => navigate("/manage-car")} className="btn w-25">
          Manage All Cars
        </button>
      </div>
      <HeroBanner />
      <section class="hero">
        <div class="col">
          <img
            className="rounded img-fluid"
            src="https://mohammedshojib.github.io/parsonal-we/images/pictures/men.jpg"
          />
        </div>
        <div class="col ms-5">
          <h5>About Me</h5>
          <h1>
            Hy! I Am
            <br />
            <span class="mission22">CAR HUNTER</span>
          </h1>

          <p>
            We hunt tesla car and listing on our website <br /> also we
            delivered the whole country
          </p>
          <a className="btn" href="#">
            Contact Me
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
