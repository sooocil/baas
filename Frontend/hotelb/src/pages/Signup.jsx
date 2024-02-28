import React from "react";
import Bbutton from "../Component/back_button";
import NavBar from "../Component/NavBar";
import "../css/login.css";
import { Helmet } from "react-helmet";
import { useState } from "react";
import axios from "axios";
import { User, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navmsg, setnavmsg] = useState(false);
  const navigate = useNavigate();
  const title = "Sign Up";

  const register = async (e) => {
    e.preventDefault();

    try {
      if (username && password) {
        const response = await axios.post("http://127.0.0.1:3000/register", {
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
    <div>
      <ToastContainer />
      <Helmet>
        <title>{title}</title>
      </Helmet>
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
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
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
          {navmsg && <Bbutton />}

          <p>
            Already have an account?
            <a href="/login">
              <strong> Sign In</strong>
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
