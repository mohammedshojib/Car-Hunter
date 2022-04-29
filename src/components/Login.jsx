import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, loading, errorHook] = useAuthState(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        <Navigate to="/" />;
        toast("Invalid email provided, please provide a valid email");
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
      navigate(from);
    }
  }, [user]);

  return (
    <div className="wrapper">
      <div className="text-center mt-4 name"> Login </div>
      <p className="text-danger text-center">{error}</p>
      <form className="p-3 mt-3" onSubmit={handleLogin}>
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
        <input type="submit" className="btn mt-3" value="Login" />
      </form>

      <div className="text-center fs-6">
        <span className="text-primary pe-auto" onClick={resetPassword}>
          Forget password?
        </span>
        or <span> </span>
        <Link to="/signup">Sign up</Link>
        <button className="btn mt-3" onClick={handleSignin}>
          Continue With Google
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};
export default Login;
