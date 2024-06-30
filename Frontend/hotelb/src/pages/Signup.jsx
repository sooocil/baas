import React, { useState } from "react";
import Bbutton from "../Component/back_button";
import NavBar from "../Component/NavBar";
import "../css/login.css";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "lucide-react";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navmsg, setnavmsg] = useState(false);
  const navigate = useNavigate();
  const title = "Sign Up";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(\.[a-z]{2,8})?$/;
  const usernameRegex = /^[a-zA-Z0-9]+$/;

  const validateForm = () => {
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format", { theme: "dark" });
      return false;
    }
    if (!usernameRegex.test(username) || username.length < 3) {
      toast.error("Username must be at least 3 characters and alphanumeric", { theme: "dark" });
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters", { theme: "dark" });
      return false;
    }
    return true;
  };

  const register = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await axios.post("http://127.0.0.1:3000/register/", {
        email,
        username,
        password,
      });
      toast.success("Signed Up", { theme: "dark" });
      setnavmsg(true);
      setTimeout(() => navigate(`/login`), 1000);
    } catch (error) {
      toast.warning("Email already exists", { theme: "dark" });
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-red-100 to-violet-400">
      <ToastContainer />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <form onSubmit={register} method="post" className="space-y-6">
          <Home />
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
              value={username}
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
              value={email}
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
              value={password}
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
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-500 font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
