import React, { useState } from "react";
import Bbutton from "../Component/back_button";
import NavBar from "../Component/NavBar";
import "../css/login.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "lucide-react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navmsg, setnavmsg] = useState(false);
  const navigate = useNavigate();
  const title = "Sign Up";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const handleRegister = (email) => {
    if (!validateEmail(email)) {
      console.log("Invalid email format");
      return;
    }
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      if (username && password) {
        const response = await axios.post("http://127.0.0.1:3000/register/", {
          email,
          username,
          password,
        });
        setTimeout(() => {
          toast.success("Signed Up", {
            theme: "dark",
          });
          navigate(`/login`);
          setnavmsg(true);
        }, 1000);
      }
    } catch (error) {
      toast.warning("Email already exists", {
        theme: "dark",
      });
      console.error("Error during registration:", error);
    }
  };

  const Bbutton = () => {
    return (
      <>
        <h1>Go to Sign In</h1>
      </>
    );
  };

  return (
    <div className=" min-h-screen flex items-center justify-center bg-gradient-to-bl from-red-100 to-violet-400">
      <ToastContainer />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <form onSubmit={register} method="post" className="space-y-6">
          <Home onClick={navigate("/")} />
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Sign Up
          </h1>
          <h4 className="text-xl text-center text-gray-600">
            Register a new account
          </h4>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <button className="w-full py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400">
            Register
          </button>
          {navmsg && <Bbutton />}
          <p className="text-center text-gray-600">
            Already have an account?
            <a
              href="/login"
              className="text-cyan-500 font-bold hover:underline"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
