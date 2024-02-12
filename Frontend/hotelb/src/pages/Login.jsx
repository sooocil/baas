import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import NavBar from "../Component/NavBar";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const title = "login";
  function handleClick() {
    navigate("/");
  }
  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      if (username && password) {
        const response = await axios.post("http://127.0.0.1:3000/login", {
          username,
          password,
        });

        console.log(response);

        // Assuming a successful login, show a success toast
        toast.success("Logged In Success", {
          theme: "dark",
        });
        setTimeout(() => {
          // Navigate to the desired page after successful login
          navigate("/cms");
        }, 2000);
      }
    } catch (error) {
      toast.error("Incorrect Credentials !", {
        position: "top-right",
        theme: "dark",
      });
    }
  };
  return (
    <>
      <ToastContainer />

      <Helmet>
        <title>{title}</title>
      </Helmet>
      <title>Login</title>
      <div className="login_container">
        {/* <h1>Login</h1> */}
        <div className="popup">
          <form onSubmit={handlesubmit} method="post">
            <h1 className="title text-3xl">Sign IN</h1>
            <h4 className="text-xl">Login with your existing account</h4>
            <label className="text-xs self-start ml-24" htmlFor="">
              Email or Username
            </label>
            <input
              type="text"
              placeholder="Username or Email"
              required
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="text-xs self-start ml-24" htmlFor="">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>

            <p>
              Don't have an account?
              <a href="/signup">
                <strong>Sign Up</strong>
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
