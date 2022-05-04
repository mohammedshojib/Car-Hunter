import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.init";
import logo from "../assets/logo.png";

const Header = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser({});
      }
    });

    return () => unsubscribe;
  }, []);
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className="h-link">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/all-cars"
          >
            Allcars
          </NavLink>
          {currentUser?.email ? (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/upload-car"
            >
              Upload Car
            </NavLink>
          ) : (
            ""
          )}
          {currentUser?.email ? (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/my-items"
            >
              MyItems
            </NavLink>
          ) : (
            ""
          )}
          {currentUser?.email ? (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/manage-car"
            >
              Manage Car
            </NavLink>
          ) : (
            ""
          )}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/q&a"
          >
            Q&A
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "non-active")}
            to="/about"
          >
            AboutMe
          </NavLink>
          {currentUser?.email ? (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/myaccount"
            >
              Profile
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "non-active")}
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
