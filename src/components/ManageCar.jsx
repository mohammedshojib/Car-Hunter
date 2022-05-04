import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { carsContext } from "../App";

const ManageCar = () => {
  const [cars, setCars] = useContext(carsContext);

  const navigate = useNavigate();

  const deleteCar = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://fast-fjord-98215.herokuapp.com/car/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = cars.filter((car) => car._id !== id);
          setCars(remaining);
          toast("Car deleted succsessfully");
        });
    }
  };

  return (
    <div className="md-w-100">
      <table className="table">
        <thead>
          <tr>
            <th>Cars Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        {cars.map((car) => (
          <tbody key={car._id}>
            <tr>
              <td>{car.name}</td>
              <td>$ {car.price}</td>
              <td>{car.quantity}</td>
              <button onClick={() => deleteCar(car._id)} className="btn mb-2">
                X
              </button>
            </tr>
          </tbody>
        ))}
      </table>

      {cars.length === 0 ? (
        <div className="text-center mt 5">
          <h1>No data avaiable</h1>
          <button onClick={() => navigate("/upload-car")} className="btn">
            Add Car
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ManageCar;
