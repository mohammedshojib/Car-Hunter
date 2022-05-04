import React, { useContext } from "react";
import { carsContext } from "../App";
import "../styles/HeroBanner.css";

const HeroBanner = () => {
  const [cars, setCars] = useContext(carsContext);
  return (
    <section className="hero">
      <div className="hero-area">
        <div id="hero-tab" className="hero-content">
          <h1>
            Start to change your
            <br />
            Lifestyle!
          </h1>

          <div className="row">
            <div className="main-col">
              <img
                src="https://mohammedshojib.github.io/influencer-by-shojib/images/discount.png"
                alt=""
              />
              <h3>{cars.length}</h3>
              <p>Total Cars Added</p>
            </div>
            <div className="main-col">
              <img
                src="https://mohammedshojib.github.io/influencer-by-shojib/images/freeship.png"
                alt=""
              />
              <h3>Free Shipping</h3>
              <p>Free Home delivery</p>
            </div>
            <div className="main-col">
              <img
                src="https://mohammedshojib.github.io/influencer-by-shojib/images/support.png"
                alt=""
              />
              <h3>Support</h3>
              <p>24/7 Great Support</p>
            </div>
          </div>
          <a href="" className="btn">
            About Us <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div id="hero-tab2" className="hero-content">
          <img
            id="hero-im"
            src="https://mohammedshojib.github.io/influencer-by-shojib/images/cartoon.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
