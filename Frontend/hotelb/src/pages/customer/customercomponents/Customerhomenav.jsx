import React from "react";
import "../../../css/home.css";
import { Heart, UserPlus, User } from "lucide-react";
import { DatePickerpick } from "../../../Component/Home/DatePicker";
import { useNavigate } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

export const Customerhomenav = () => {
  const navigate = useNavigate();
  return (
    <div className="homeNavContainer w-full fixed p-4 backdrop-blur-md text-white top-0 bg-black bg-opacity-0  ">
      <div className="logo">
        <a
          href={"/"}
          tabIndex={-1}
          className="select-none text-3xl  cursor-pointer"
        >
          BAAS
        </a>
      </div>
      <DatePickerpick />
      <ProfileDropdown />
    </div>
  );
};

export default Customerhomenav;
