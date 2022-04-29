import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Myprofile from "./components/Myprofile";
import Notfound from "./components/Notfound";
import RequireAuth from "./components/RequireAuth";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myaccount" element={<Myprofile />} />
        <Route path="/*" element={<Notfound />} />
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
