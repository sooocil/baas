import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import NavBar from "../Component/NavBar";
import { Helmet } from "react-helmet";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/loginBg.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginBg = {
    backgroundImage: `url(${"../assets/loginBg.jpeg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  const navigate = useNavigate();
  const title = "login";
  function handleClick() {
    navigate("/");
  }
  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      if (email && password) {
        const response = await axios.post("http://127.0.0.1:3000/login", {
          email,
          password,
        });

        if (response.status === 200) {
          if (response.data.error) {
            // If there's an error message in the response, show an error toast
            toast.error(response.data.error, {
              position: "top-right",
              theme: "dark",
            });
          } else if (response.data.message === "User not found") {
            // If the user was not found, show an error toast
            toast.error("User not found. Please register.", {
              position: "top-right",
              theme: "dark",
            });
          } else {
            // If there's no error message and user found, show a success toast and navigate to the home page
            toast.success("Logged In Successfully", {
              theme: "dark",
            });
            navigate("/Customerhome"); // Navigate to the home page
            // localStorage.setItem(res.cookie);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
          }
        } else {
          // If the response status code is not 200, show an error toast
          toast.error("Login Failed. Please try again later.", {
            position: "top-right",
            theme: "dark",
          });
        }
      }
    } catch (error) {
      // Show an error toast if there's an error with the request
      toast.error("An error occurred. Please try again later.", {
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
      <div className="bg-red-400 bg-gradient-to-r from-cyan-200 to-red-300">
        <div className="popup ">
          <form onSubmit={handlesubmit} method="post">
            <h1 className="title text-3xl">Sign IN</h1>
            <h4 className="text-xl">Login with your existing account</h4>
            <label className="text-xs self-start ml-24" htmlFor="">
              Email :
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-xs self-start ml-24" htmlFor="">
              Password :
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
