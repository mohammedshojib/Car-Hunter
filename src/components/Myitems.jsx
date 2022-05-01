import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { carsContext } from "../App";
import { auth } from "../firebase.init";

const Myitems = () => {
  const [cars, setCars] = useContext(carsContext);
  const [user] = useAuthState(auth);

  return <div></div>;
};

export default Myitems;
