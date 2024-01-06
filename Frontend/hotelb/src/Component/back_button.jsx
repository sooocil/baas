import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

const Bbutton = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <button className=" " onClick={handleClick}>
        ⬅️ Back
      </button>
    </div>
  );
};

export default Bbutton;
