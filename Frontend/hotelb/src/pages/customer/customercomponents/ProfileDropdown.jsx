import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function ProfileDropdown() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleButtonClick = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  const deleteToken = async () => {
    const response = await axios.get("http://127.0.0.1:3000/");
    if (response.status === 200) {
      if (response.data.error) {
        toast.error(response.data.error, {
          position: "top-right",
          theme: "dark",
        });
      } else if (response.data.message === "User not found") {
        toast.error("User not found. Please register.", {
          position: "top-right",
          theme: "dark",
        });
      } else {
        toast.success("Logged Out Successfully");
        // Navigate("/Customerhome");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } else {
      console.log("can't delete token");
    }
    localStorage.removeItem("token", response.data.token);
    window.location.href = "/";
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  //fetch current logged in user's name from backen
  const [user, setUser] = useState("");
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/users").then((response) => {
      setUser(response.data);
    });
  },[]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className=" inline-flex p-[5px] justify-center h-full w-full rounded-full border border-gray-300 shadow-sm  bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          onClick={handleButtonClick}
        >
          <img
            src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-10 object-cover w-10 rounded-full "
          />
        </button>
      </div>
      {isDropdownVisible && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm cursor-pointer text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Spending
            </a>
            <a
              href="#"
              className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Dashboard
            </a>
            <a
              onClick={deleteToken}
              className="block px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
