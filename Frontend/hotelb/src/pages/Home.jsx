import React, { useState, useEffect } from "react";
import "../css/home.css";
import HomeNav from "../Component/HomeNav";
import { RoomsCard } from "../Component/Home/RoomsCard";
import img1 from "../assets/img3.jpg";
// import { roomdata } from "../Component/Home/roomContens.jsx";
import axios from "axios";
// import { useFetch } from "../hooks/useFetch";

const Home = () => {
  // const { data, loading, error, reFetch } = useFetch(
  //   "http://localhost:3001/rooms"
  // );

  const [hotels, setHotels] = useState([]);
  const [roomdata, setRoomData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000").then(
      (response) => {
        setRoomData(response.data);
      },
      (error) => {
        console.error("Error fetching rooms:", error);
      }
    );
  }, []);

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:3000/rooms").then(
  //     (response) => {
  //       setHotels(response.data);
  //     },
  //     (error) => {
  //       console.error("Error fetching rooms:", error);
  //     }
  //   );
  // }, []);

  console.log(roomdata);
  return (
    <div className="h-screen w-full">
      <div className="homeContainer bg-black m-0 p-0">
        <HomeNav className="backdrop-blur-sm bg-black" />
        <div className="homeImage relative"></div>
        <h1 className="text-white absolute text-4xl top-1/2 select-none">
          Reserve Your Slice of Relaxation
        </h1>
      </div>
      <div className="homeOtherContent bg-black p-20 pl-[170px]">
        {roomdata.map((roomdata, index) => {
          return (
            <RoomsCard
              key={index}
              Image={img1}
              roomno={roomdata.roomno}
              roomname={roomdata.roomname}
              rent={roomdata.rent}
              description={roomdata.description}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Home;
