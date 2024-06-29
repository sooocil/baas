import React, { useState, useEffect } from "react";
//import home.css from css folder
import "../../css/home.css"

import HomeNav from "../../Component/HomeNav";
import { RoomsCard } from "../../Component/Home/RoomsCard";
import img1 from "../../assets/homebg1.jpg";
import axios from "axios";
import Customerhomenav from "./customercomponents/Customerhomenav";
import videoBg from "../../assets/Bg video Home.mp4";

const Customerhome = () => {
  
  const [roomdata, setRoomData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000")
      .then((response) => {
        setRoomData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="homeContainer bg-black m-0 p-0 relative">
        <Customerhomenav className="backdrop-blur-sm bg-black"/>
        <div className="videoOverlay opacity-90 bg-gradient-to-t from-black to-transparent absolute inset-0"></div>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="homeVideo relative z-10"
          src={videoBg}
          type="video/mp4"
        />
        <div className="flex flex-col justify-center items-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <h1 className="font-pink text-4xl select-none bg-blend-color-dodge">
            Reserve Your Slice of Relaxation
          </h1>
          <p className="text-center   w-1/2">
            Book a wander with inspiring views, hotel-grade amenities, dreamy beds, top-tier cleaning, and 24/7 concierge service. It’s a vacation home, but better.
          </p>
        </div>
      </div>
      <div className="homeOtherContent bg-black p-20 pl-[170px]">
        {roomdata.map((roomdata, index) => (
          <RoomsCard
            key={index}
            id={roomdata._id}
            Image={img1}
            roomno={roomdata.roomno}
            roomname={roomdata.roomname}
            status={roomdata.status}
            rent={roomdata.rent}
            description={roomdata.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Customerhome;
