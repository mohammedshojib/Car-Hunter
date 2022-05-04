import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Allcars from "./components/Allcars";
import CarDetails from "./components/CarDetails";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import ManageCar from "./components/ManageCar";
import Myitems from "./components/Myitems";
import Myprofile from "./components/Myprofile";
import Notfound from "./components/Notfound";
import QandA from "./components/QandA";
import RequireAuth from "./components/RequireAuth";
import Signup from "./components/Signup";
import UploadCar from "./components/UploadCar";

export const carsContext = createContext();

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://fast-fjord-98215.herokuapp.com/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <carsContext.Provider value={[cars, setCars]}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myaccount" element={<Myprofile />} />
          <Route path="/q&a" element={<QandA />} />
          <Route
            path="/car/:id"
            element={
              <RequireAuth>
                <CarDetails />
              </RequireAuth>
            }
          />
          <Route path="/*" element={<Notfound />} />
          <Route path="/All-cars" element={<Allcars />} />
          <Route
            path="/my-items"
            element={
              <RequireAuth>
                <Myitems />
              </RequireAuth>
            }
          />
          <Route
            path="/upload-car"
            element={
              <RequireAuth>
                <UploadCar />
              </RequireAuth>
            }
          />
          <Route
            path="/manage-car"
            element={
              <RequireAuth>
                <ManageCar />
              </RequireAuth>
            }
          />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </carsContext.Provider>
  );
}

export default App;
