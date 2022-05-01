import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase.init";
import notFoundIMG from "../assets/noIcon.png";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Myprofile = () => {
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const [currentUser, setCurrentUser] = useState({});
  const [user, loading, errorHook] = useAuthState(auth);

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

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="wrapper">
        <div className="text-center mt-4 name">
          <div className="logo">
            <img src={currentUser?.photoURL || notFoundIMG} alt="" />
          </div>
          {currentUser.displayName || "Name Not Found"}
          <p>{currentUser.email}</p>
        </div>

        <button
          style={{ backgroundColor: "red" }}
          className="btn mt-3"
          onClick={logOut}
        >
          LogOut
        </button>
      </div>
    );
  }
};

export default Myprofile;
