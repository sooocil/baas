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
export const RoomDetail = () => {
  const [start, setStart] = useState("");
  let moment;

  const [end, setEnd] = useState("");
  const id = useParams().id;
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
    console.log(id);
    axios.get(`http://127.0.0.1:3000/api/rooms/find/${id}`).then(
      (response) => {
        setRooms(response.data);
        console.log(rooms.status);
      },
      (error) => {
        console.error("Error fetching rooms:", error);
      }
    );
  }, [id]);
  const ReserveRoomInbackend = () => {
    if (!!start && !!end) {
      let reservation = {
        roomId: id,
        roomno: id.roomno,
        startTime: new Date(start),

        endDate: new Date(end),
      };
      //console.log(reservation);
      const todayDate = new Date();
      console.log(todayDate);
      axios
        .post("http://localhost:3000/booking/addrooms", reservation)
        .then((resp) => {
          alert("Room Reserved");
          window.location.reload();
        })
        .catch((err) => alert("Error in reservation"));
    } else {
      alert("Please select a valid time range");
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
            <p className="text-xl  text-green-500">
              {/* write js for checking room status if it is booked write booked else print next available dat*/}
              {/* change color based on availibility status i.e. red for booked green for available  */}
              {rooms.status}
            </p>

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
