import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <NavLink
            id="logo"
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/"
          >
            <img
              src="https://logovectorseek.com/wp-content/uploads/2020/02/demos-logo-vector.png"
              alt=""
            />
          </NavLink>
        </div>
        <div className="row">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "non-active"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "non-active"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : "non-active"
                }
                to="/addcar"
              >
                Add Car
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="row">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
