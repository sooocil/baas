import React from "react";
// import  RoomContents  from "./roomContens.jsx";
import "../../css/home.css";
import { Link } from "react-router-dom";

export const RoomsCard = (props) => {
  const maxChars = 5;
  const time = new Date().toLocaleDateString();
  return (
    <div
      className=" cardContainer p-2 m-2
      sticky
      "
      onClick={() => {
        window.location.href = "/roomdetail";
      }}
    >
      <div className="roomImageContainer rounded-sm ">
        <img src={props.Image} alt="Product_img" />
      </div>
      <div className="roomDetails ">
        <h1 className="roomLocation text-xl text-white ">
          Room {props.roomno}
        </h1>
        <p className="hotelName text-2xl text-white">{props.roomname}</p>

        <div className="flex flex-row justify-start items-center gap-4">
          {props.description.length > maxChars && (
            <Link href={`/post/${props.id}`}>
              <p className="text-ua-red text-white text-left text-xs cursor-pointer hover:underline">
                {props.description} + Read more...
              </p>
            </Link>
          )}
        </div>

        <p className="hotelName text-2xl text-white">{props.rent}</p>

        <h1 className="recentStatus text-xs text-white">
          Next Available {time}
        </h1>
      </div>
    </div>
  );
};
