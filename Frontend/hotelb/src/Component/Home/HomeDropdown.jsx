import React from "react";
import { UserPlus, User } from "lucide-react";

export const HomeDropdown = () => (
  <div className="flex items-center space-x-4">
    <a
      href="/login"
      className="group bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 hover:text-white transition-colors duration-300 ease-in-out focus:outline-none focus:bg-gray-800 focus:text-white"
    >
      <User className="text-white group-hover:text-gray-200" />
      <span className="text-white font-semibold group-hover:text-gray-200">Sign In</span>
    </a>
    <a
      href="/signup"
      className="group bg-black text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 hover:text-white transition-colors duration-300 ease-in-out focus:outline-none focus:bg-gray-800 focus:text-white"
    >
      <UserPlus className="text-white group-hover:text-gray-200" />
      <span className="text-white font-semibold group-hover:text-gray-200">Sign Up</span>
    </a>
  </div>
);

export default HomeDropdown;
