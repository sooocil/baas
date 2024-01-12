import React, { useState } from "react";
import "../css/home.css";
// import NavBar from "../Component/NavBar";
import { HomeNav } from "../Component/HomeNav";

const Home = () => {
  return (
    <>
      {/* <NavBar /> */}
      <HomeNav />
      <h1>Hey this is home page</h1>
    </>
  );
};

export default Home;
