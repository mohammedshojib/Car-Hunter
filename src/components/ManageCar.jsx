import React, { useContext } from "react";
import { carsContext } from "../App";

const ManageCar = () => {
  const [cars, setCars] = useContext(carsContext);

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
          toast("Car deleted succsessfully");
        });
    }
  };

  return (
    <div className="w-50 mx-auto">
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
    </div>
  );
};

export default ManageCar;
