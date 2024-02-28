import React from "react";
import "../../css/Cms.css";
import { Bell } from "lucide-react";
import { CmsRooms } from "./CmsRooms";
import { useState } from "react";

const aliaceDropDown = () => {
  return (
    <div className="DropDown shadow-lg  ">
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  );
};

export const CmsNav = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="cmsnavcontainer p-[-20px] ">
      <div className="cmsnavsections">
        <div className="DropDown shadow-lg  ">
          <h1
            className="Aliace z-40  "
            tabIndex={-1}
            onMouseEnter={() => setIsHovered(true)}
          >
            Aliace
          </h1>
        </div>
        <li>
          <a href="/cms/overview" tabIndex={-1}>
            Overview
          </a>
        </li>
        <li>
          <a href="/cms/guests" tabIndex={-1}>
            Guests
          </a>
        </li>
        <li>
          <a href="/cms/rooms" tabIndex={-1}>
            Rooms
          </a>
        </li>
        <li>
          <a href="/cms/booking" tabIndex={-1}>
            Bookings
          </a>
        </li>
        <li>
          <a href="/cms/profile" tabIndex={-1}>
            Profile
          </a>
        </li>
      </div>
      <div className="navright">
        <input
          className="text-black navsearch shadow-lg active:outline-none"
          type="text"
          onChange={props.doit}
          placeholder="Search...."
          tabIndex={-1}
        />
        <div className="cmsnotifi">
          <a href="/cms/notification">
            <Bell />
          </a>
        </div>
        <button className="logoutbtn shadow-lg">Log Out</button>
      </div>
    </div>
  );
};
