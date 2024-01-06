import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import NavBar from "./NavBar";
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
      <NavBar />
      <title>Login</title>
      <div className="container">
        {/* <h1>Login</h1> */}
        <div className="popup">
          <form onSubmit={handlesubmit} method="post">
            <h1 className="title">LOGIN</h1>
            <h4>Login with your existing account</h4>
            <input
              type="text"
              placeholder="Username"
              required
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
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
                {" "}
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
