import React, { useState } from "react";
import "../css/home.css";
import { HomeNav } from "../Component/HomeNav";

const Home = () => {
  const rooms = [
    { name: "Single Room", price: "$100" },
    { name: "Double Room", price: "$200" },
    { name: "Suite", price: "$350" },
  ];

  // console.log(rooms);
  return (
    <div className="container">
      <HomeNav />
      <h1>Welcome to our Hotel!</h1>
      <p>We offer a wide range of accommodations for all your needs.</p>
      <hr />
      <h2>Our Rooms</h2>
      <ul className="room-list">
        {rooms.map((item) => (
          <li key={item.name}>
            <h4>{item.name}</h4>
            <span>Price: {item.price} </span>
            <br></br>
            <button onClick={() => alert("This feature is not available yet.")}>
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
