import React from "react";
import "../css/homeNav.css";
import { Heart, UserPlus, User } from "lucide-react";

export const HomeNav = () => {
  return (
    <div className="container">
      <div className="logo">
        <h1>Your_Lodge</h1>
      </div>
      <div className="main">
        <ul>
          <li>
            <Heart /> <a href="/fav">Favourites</a>
          </li>
          <li>
            <User />
            <a href="/login">Sign In</a>
          </li>
          <li>
            <UserPlus />
            <a href="/signup">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
