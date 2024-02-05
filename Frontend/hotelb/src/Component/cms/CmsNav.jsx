import React from "react";
import "../../css/Cms.css";
import { Bell } from "lucide-react";
import { CmsRooms } from "./CmsRooms";

export const CmsNav = (props) => {
  return (
    <div className="cmsnavcontainer p-[-20px] ">
      <div className="cmsnavsections">
        <div className="DropDown shadow-md pl-[5px] pt-{2px]  ">
          <h1>Aliace</h1>
        </div>
        <li>
          <a href="/cms/overview">Overview</a>
        </li>
        <li>
          <a href="/cms/rooms">Rooms</a>
        </li>
        <li>
          <a href="/cms/booking">Booking</a>
        </li>
        <li>
          <a href="/cms/setting">Setting</a>
        </li>
      </div>
      <div className="navright">
        <input
          className=" navsearch"
          type="text"
          onChange={props.doit}
          placeholder="Search...."
        />
        <div className="cmsnotifi">
          <a href="/cms/notification">
            <Bell />
          </a>
        </div>
        <button className="logoutbtn shadow-md">Log Out</button>
      </div>
    </div>
  );
};
