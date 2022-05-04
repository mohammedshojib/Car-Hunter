import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import "../styles/Login.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const provider = new GoogleAuthProvider();

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, errorHook] = useAuthState(auth);
  const [error, setError] = useState("");
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const creatUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(auth.currentUser).then(() => {});
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sented email");
    } else {
      toast("please enter your email address");
    }
  };
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      const userData = async () => {
        const { data } = await axios.post(
          "https://fast-fjord-98215.herokuapp.com/login",
          {
            email,
          }
        );
        localStorage.setItem("accesToken", data);
        navigate(from);
        console.log(data);
      };
      userData();
    }
  }, [user]);
  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <div className="text-center mt-4 name"> Signup </div>
        <p className="text-danger text-center">{error}</p>
        <form className="p-3 mt-3" onSubmit={creatUser}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
            />
          </div>
          <input type="submit" className="btn mt-3" value="Signup" />
          {/* <p>{error?.message}</p> */}
        </form>

        <div className="text-center fs-6">
          <span className="text-primary pe-auto" onClick={resetPassword}>
            Forget password?
          </span>
          or <span> </span>
          <Link to="/login">Login</Link>
          <button className="btn mt-3" onClick={handleSignin}>
            Continue With Google
          </button>
        </div>
      </div>
    );
  }
};

export default Signup;
