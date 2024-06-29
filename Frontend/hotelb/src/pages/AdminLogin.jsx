import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Home } from "lucide-react";
import axios from 'axios';

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', { email, password });
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      if (user.isAdmin) {
        navigate("/cms"); // Redirect to admin dashboard
      } else {
        toast.error("You are not an admin!", {
          position: "top-right",
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Login Failed. Email or Password is Incorrect!", {
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
              Admin Sign In
            </h1>
            <h4 className="text-xl text-center text-gray-600">
              Login with your admin account
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
                placeholder="test@example.com"
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
                placeholder="s00cilll"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
