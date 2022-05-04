import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { carsContext } from "../App";

// <===== CarDetails ====>

const CarDetails = () => {
  const [cars, setCars] = useContext(carsContext);
  const { id } = useParams();
  const car = cars.find((car) => car._id == id);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // <===== deleteCar ====>
  const deleteCar = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/car/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = cars.filter((car) => car._id !== id);
          setCars(remaining);
          navigate(from);
          toast("Car deleted succsessfully");
        });
    }
  };

  // <===== updateQuantity ====>

  const updateQuantity = (event) => {
    event.preventDefault();
    const quantity =
      parseFloat(event.target.quantity.value) + parseFloat(car.quantity);

    const url = `https://fast-fjord-98215.herokuapp.com/car/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Quantity updated succsessfully");
      });
    event.target.reset();
  };
  // <===== deliveredCar ====>

  const deliveredCar = () => {
    const quantity = car.quantity - 1;

    const url = `https://fast-fjord-98215.herokuapp.com/car/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Delivered Car succsessfully");
      });
  };

  return (
    <div className="car-details">
      <di className="details">
        <img src={car.img} alt="" />
      </di>

      <div id="detaols-area" className="details">
        <h1>{car.name}</h1>
        <p>{car.description}</p>
        <p>
          <b>Quantity: </b>
          {car.quantity}
        </p>
        <form action="" onSubmit={updateQuantity}>
          <input
            type="number"
            placeholder="Update Quantity"
            className="quantity-input"
            name="quantity"
            required
          />
          <input className="btn" type="submit" value="Add Quantity" />
        </form>
        <div className="mt-5">
          <p>
            <b>Car Details: </b>
            {car.description}
          </p>
          <button className="btn me-2" onClick={() => deleteCar(car._id)}>
            Deleted
          </button>
          <span> </span>
          <button className="btn" onClick={() => deliveredCar(car._id)}>
            DeliveredCar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
