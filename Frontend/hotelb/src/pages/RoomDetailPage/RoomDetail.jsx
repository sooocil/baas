import React from "react";
import RoomDetailsNav from "../../Component/Home/RoomDetailsNav";
import { useState, useEffect } from "react";
import "../../css/home.css";
import { RoomDetailImage } from "./RoomDetailImage";
import { DatePicker, Space, theme } from "antd";
const RangePicker = DatePicker.RangePicker;
import axios from "axios";

export const RoomDetail = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const clearSelected = (e) => {
    setStart(null);
    setEnd(null);
  };

  const SetDates = (dateStrings) => {
    setStart(dateStrings[0]);
    setEnd(dateStrings[1]);
    console.log(dateStrings[0], dateStrings[1]);
  };

  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3000").then(
      (response) => {
        setRooms(response.data);
      },
      (error) => {
        console.error("Error fetching rooms:", error);
      }
    );
  }, []);

  return (
    <div className="roomDetailContainerPage absolute rounded-none w-full h-screen m-0 bg-black">
      <RoomDetailsNav />
      <div className="roomDetailContainerPage bg-black ">
        <RoomDetailImage />
        <div className="RoomDetailImageDescription inline-flex  bg-black ml-44 mt-10 text-white">
          <div className="detailbox min-w-2  max-w-max">
            <h1 className="text-xl  ">Pokhara, Lakeside</h1>
            <h1 className="text-3xl ">Hotel Paradise</h1>
            <p className="text-xs mt-4 text-green-500">
              Next Available 12/12/2021
            </p>
            <p className="text-sm mt-4 font-serif w-1/2 text-justify">
              {rooms.description}
            </p>
          </div>
          <div className="mt-4 flex flex-col h-1/2 rounded-md justify-center self-center bg-slate-700 p-2">
            <Space direction="vertical" size={12}>
              <RangePicker
                variant="filled"
                onChange={SetDates}
                placement="bottomRight"
                size="small"
                className="detailRangePicker z-0 hover:bg-white bg-white text-black"
                placeholder="Check in"
              />
            </Space>
            <button
              onClick={clearSelected}
              className="bg-white p-2 m-2 flex-1 justify-center self-start w-1/2 text-black hover:bg-black hover:text-white rounded-md"
            >
              Clear
            </button>
            <button className="bg-white p-2 m-2 flex-1justify-center self-end w-1/2 text-black hover:bg-black hover:text-white rounded-md">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
