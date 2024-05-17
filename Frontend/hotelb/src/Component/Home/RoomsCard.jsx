import React, { useEffect, useState } from "react";
// import  RoomContents  from "./roomContens.jsx";
import "../../css/home.css";
import { Link } from "react-router-dom";
import axios from "axios";

export const RoomsCard = (props) => {
  const maxChars = 5;
  const time = new Date().toLocaleDateString();
  const propsId = props.id;
  const redWithId = () => {
    return <Link to={`/roomdetail/${propsId}`}></Link>;
  };
  const [rooms, setRooms] = useState([]);

  // fetch data of room from backend

  const slug = "RoomNo:" + props.roomno;

  return (
    <div
      className="group cardContainer p-2 m-2
      sticky
      "
      onClick={redWithId}
    >
      <Link to={`/roomdetail/${props.id}`}>
        <div className="roomImageContainer rounded-sm ">
          <img src={props.Image} alt="Product_img" />
        </div>
        <div className="roomDetails ">
          <h1 className="roomLocation text-xl text-white ">
            Room {props.roomno}
          </h1>
          <p className="hotelName text-2xl text-white">{props.roomname}</p>

          <div
            style={{ textTransform: "capitalize" }}
            className="flex flex-row justify-start items-center gap-4"
          >
            {props.description.length > maxChars && (
              <Link href={`/post/${props.id}`}>
                <p className="text-ua-red text-white group-hover:text-purple-200 text-left text-xs cursor-pointer ">
                  {props.description}+ ...
                </p>
              </Link>
            )}
          </div>

          <p className="group-hover:text-purple-200 hotelRent text-2xl text-white">
            Rs {props.rent}
          </p>

          <h1 className="recentStatus group-hover:text-purple-200 text-xs text-white">
            {rooms.status}
            {/* Room Status : {props.status === "Booked" ? "Booked" : "Available"} */}
          </h1>
        </div>
      </Link>
    </div>
  );
};
