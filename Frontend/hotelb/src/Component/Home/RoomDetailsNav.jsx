import React from "react";
import HomeDropdown from "./HomeDropdown";
import ProfileDropdown from "../../pages/customer/customercomponents/ProfileDropdown";

export const RoomDetailsNav = () => {
  return (
    <div className="homeNavContainer backdrop-blur-sm w-full fixed p-4  gap-[600px] text-black top-0 bg-black bg-opacity-100  ">
      <div className="logo">
        <a
          href={"/"}
          className="select-none text-white  text-3xl cursor-pointer "
          tabIndex={-1}
        >
          BAAS
        </a>
      </div>
    </div>
  );
};

export default RoomDetailsNav;
