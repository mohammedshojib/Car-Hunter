import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import { carsContext } from "../App";
import { auth } from "../firebase.init";
import { useNavigate } from "react-router-dom";

const Myitems = () => {
  const navigate = useNavigate();
  const [allCars, setAllCars] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const email = user.email;

    const myItems = async () => {
      const url = `https://fast-fjord-98215.herokuapp.com/my-items?email=${email}`;
      const { data } = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accesToken")}`,
        },
      });

      setAllCars(data);
    };
    myItems();
  }, [user]);

  const deleteMyCar = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://fast-fjord-98215.herokuapp.com/my-items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = allCars.filter((car) => car._id !== id);
          setCars(remaining);
          toast("Car deleted succsessfully");
        });
    }
  };

  return (
    <div className="mx-auto md-w-100">
      <table className="table">
        <thead>
          <tr>
            <th>Cars Name</th>
            <th>Price</th>
            <th>Email</th>
          </tr>
        </thead>
        {allCars.map((car) => (
          <tbody key={car._id}>
            <tr>
              <td>{car.name}</td>
              <td>$ {car.price}</td>
              <td>{car.email}</td>
              <button
                onClick={() => deleteMyCar(car._id)}
                className="btn mt-2 mb-2"
              >
                X
              </button>
            </tr>
          </tbody>
        ))}
      </table>
      {allCars.length === 0 ? (
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

export default Myitems;
