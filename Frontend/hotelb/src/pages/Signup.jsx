import React from "react";
import Bbutton from "../Component/back_button";
import NavBar from "./NavBar";
import "../css/login.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import { User, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const title = "Sign Up";

  const register = async (e) => {
    e.preventDefault();

    try {
      if (username && password) {
        const response = await axios.post("http://127.0.0.1:3000/register", {
          username,
          password,
        });
        console.log(response);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar />
      <div className="popup">
        <form onSubmit={register} method="post">
          <h1 className="title">Sign Up</h1>
          <h4>Register a new account</h4>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button>Register</button>
          <p>
            Already have an account?
            <a href="/login">
              <strong>Login</strong>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
