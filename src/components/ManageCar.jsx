import React, { useContext } from "react";
import { carsContext } from "../App";

const ManageCar = () => {
  const [cars, setCars] = useContext(carsContext);

  return (
    <div className="w-80 mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
      </table>

      {cars.map((car) => (
        <table key={car._id} className="table">
          <tbody>
            <tr>
              <td>{car.name}</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default ManageCar;
