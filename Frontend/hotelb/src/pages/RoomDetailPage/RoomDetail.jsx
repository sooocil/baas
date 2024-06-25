import React from "react";
import RoomDetailsNav from "../../Component/Home/RoomDetailsNav";
import { useState, useEffect } from "react";
import "../../css/home.css";
import { RoomDetailImage } from "./RoomDetailImage";
import { DatePicker, Space, theme } from "antd";
const RangePicker = DatePicker.RangePicker;
import axios from "axios";
import { useParams } from "react-router-dom";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

export const RoomDetail = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [rooms, setRooms] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const currentDate = new Date();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/api/rooms/find/${id}`)
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  }, [id]);

  const clearSelected = () => {
    setStart(null);
    setEnd(null);
  };

  const SetDates = (start, end) => {
    setStart(start[0]);
    setEnd(end[0]);
    console.log(start[0], end[0]);
  };

  const ReserveRoomInbackend = () => {
    console.log(rooms.status);

    if (start && end && rooms.status === "Available") {
      // Check if room is available
      const reservation = {
        roomno: rooms.roomno,
        bookingDate: currentDate,
        startTime: start,
        endDate: end,
      };

      const token = localStorage.getItem("token");

      axios
        .post("http://localhost:3000/booking/addrooms", reservation, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          alert("Room Reserved");
          navigate("/view"); // Redirect to view page
        })
        .catch((err) => {
          console.error("Error in reservation:", err);
          alert("Error in reservation, Problem in server!");
        });
    } else {
      alert("Room is not available or invalid time range");
    }
  };

  return (
    <div className="roomDetailContainerPage absolute rounded-none w-full h-screen m-0 bg-black">
      <RoomDetailsNav />
      <div className="roomDetailContainerPage bg-black ">
        <RoomDetailImage />
        <div className="RoomDetailImageDescription inline-flex  bg-black ml-44 mt-10 text-white">
          <div className="detailbox min-w-2  max-w-max">
            <h1 className="text-4xl  ">{rooms.roomno}</h1>
            <br />
            <p className="text-xl ">{rooms.status}</p>

            <p
              style={{ textTransform: "capitalize " }}
              className="max-w-[900px]  mt-4 text-xl leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400"
            >
              {rooms.description}
            </p>
          </div>
          <br />
          <br />
          <div className="flex right-1/3 flex-col absolute  rounded-md  bg-slate-700 p-4">
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
              onClick={ReserveRoomInbackend}
              className="bg-white  p-2 mt-2 flex-1justify-center self-end w-full text-black hover:bg-black hover:text-white rounded-md"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
