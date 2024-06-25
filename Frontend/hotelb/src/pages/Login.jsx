import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (email && password) {
        const user = { email, password };
  
        const response = await axios.post("http://127.0.0.1:3000/login", user);
  
        if (response.status === 200) {
          const { token } = response.data; // Extract token from response.data
          if (token) {
            localStorage.setItem("token", token); // Store token in localStorage
            navigate("/view"); // Redirect to authenticated view
          } else {
            toast.error("Token not received. Please try again.", {
              position: "top-right",
              theme: "dark",
            });
          }
        } else {
          toast.error("Login Failed. Please try again later.", {
            position: "top-right",
            theme: "dark",
          });
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login Failed. Please try again later.", {
        position: "top-right",
        theme: "dark",
      });
    }
  };
  

  return (
    <div>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-red-100 to-violet-400">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
          <form onSubmit={handlesubmit} className="space-y-6">
            <a href="/">
              <Home />
            </a>

            <h1 className="text-3xl font-bold text-center text-gray-800">
              Sign In
            </h1>
            <h4 className="text-xl text-center text-gray-600">
              Login with your existing account
            </h4>

            <div>
              <label
                className="block text-xs font-bold text-gray-700 ml-1 mb-1"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label
                className="block text-xs font-bold text-gray-700 ml-1 mb-1"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Login
            </button>
            <p className="text-center text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-cyan-500 font-bold hover:underline"
              >
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
