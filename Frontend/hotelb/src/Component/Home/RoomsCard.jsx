import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../css/home.css";
import axios from "axios";

export const RoomsCard = (props) => {
  const maxChars = 5;
  const [rooms, setRooms] = useState([]);

  // fetch data of room from backend
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("/api/rooms");
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const slug = "RoomNo:" + props.roomno;

  return (
    <div className="group cardContainer p-2 m-2 sticky">
      <Link to={`/roomdetail/${props.id}`} className="room-link">
        <div className="roomImageContainer rounded-sm">
          <img src={props.Image} alt="Product_img" />
        </div>
        <div className="roomDetails">
          <h1 className="roomLocation text-xl text-white">
            Room {props.roomno}
          </h1>
          <p className="hotelName text-2xl text-white">{props.roomname}</p>
          <div
            style={{ textTransform: "capitalize" }}
            className="flex flex-row justify-start items-center gap-4"
          >
            {props.description.length > maxChars ? (
              <Link to={`/post/${props.id}`} className="description-link">
                <p className="text-ua-red text-white group-hover:text-purple-200 text-left text-xs cursor-pointer">
                  {props.description}{" "}
                  <span className="font-serif opacity-80">Read more</span>...
                </p>
              </Link>
            ) : (
              <p className="text-ua-red text-white group-hover:text-purple-200 text-left text-xs">
                {props.description}
              </p>
            )}
          </div>
          <p
            className={`text-white ${
              props.status === "booked" ? "text-red-500" : "text-green-500"
            }`}
          >
            {props.status}
          </p>

          <p className="group-hover:text-purple-200 hotelRent text-2xl text-white">
            Rs {props.rent}
          </p>
          <h1 className="recentStatus group-hover:text-purple-200 text-xs text-white">
            {rooms.status}
          </h1>
        </div>
      </Link>
    </div>
  );
};
