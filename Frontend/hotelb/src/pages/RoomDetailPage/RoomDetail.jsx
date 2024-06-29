import React, { useState, useEffect } from "react";
import RoomDetailsNav from "../../Component/Home/RoomDetailsNav";
import "../../css/home.css";
import { RoomDetailImage } from "./RoomDetailImage";
import { DatePicker, Space, Tooltip } from "antd";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import PopupModal from "./PopupModal";
import { BedSingle , BedDouble, AirVent} from "lucide-react";

const { RangePicker } = DatePicker;

export const RoomDetail = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [rooms, setRooms] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const currentDate = new Date();
  const token = localStorage.getItem("token");

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

  const SetDates = (dates) => {
    setStart(dates ? dates[0] : null);
    setEnd(dates ? dates[1] : null);
  };

  const handleReserveRoom = () => {
    if (!token) {
      // Redirect to signup page if not logged in
      navigate("/signup");
      return;
    }

    if (start && end && rooms.status === "Available") {
      const reservation = {
        roomno: rooms.roomno,
        bookingDate: currentDate,
        startTime: start,
        endDate: end,
      };

      setModalLoading(true); // Show loading in modal
      axios
        .post("http://localhost:3000/booking/addrooms", reservation, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          setModalLoading(false); // Hide loading after successful reservation
          setModalOpen(true); // Show modal with status
          // navigate("/view"); // Consider redirecting after reservation
        })
        .catch((err) => {
          console.error("Error in reservation:", err);
          setModalLoading(false); // Hide loading on error
          setModalOpen(true); // Still show modal to display error
        });
    } else {
      alert("Room is not available or invalid time range");
    }
  };

  const handleModalReload = () => {
    // Handle reload logic if needed
    setModalLoading(true); // Example: Show loading again
    setTimeout(() => {
      setModalLoading(false);
    }, 2000);
  };

  const handleModalClose = () => {
    setModalOpen(false); // Close modal
  };

  return (
    <div className="roomDetailContainerPage flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <RoomDetailsNav />
      <RoomDetailImage />
      <div className="roomDetailContent max-w-4xl mb-20 w-full mx-auto p-8 bg-gray-800 rounded-lg shadow-lg">
        <div className="roomDetailInfo mt-8 mb-10 text-center">
          <h1 className="text-4xl font-bold">{rooms.roomno}</h1>
          <p
            className={`mt-2 text-2xl ${
              rooms.status === "booked" ? "text-red-500" : "text-green-400"
            }`}
          >
            {rooms.status}
          </p>
          <p className={`text-2xl  text-green-500`}>{rooms.rent}</p>
          <br />
          <h1 className="text-2xl">Aminities : </h1><br />
          <div className="capacity flex flex-row justify-center">
            <p className="text-xl flex gap-5">
              {rooms.capacity} <BedSingle />
            </p>
          </div>
          <br />
          <div className="ACNonAC flex justify-center ">
            <p className="text-xl  flex gap-5">{rooms.acnonac} <AirVent /></p>
          </div>
          <br />
          <div className="Room Type flex justify-center">
            <p className="text-xl flex gap-5">{rooms.roomtype} <BedDouble /></p>
          </div><br />
          <p className="mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
            {rooms.description}
          </p>
        </div>
        <div className="reservationSection mt-8 flex flex-col items-center">
          <Tooltip title={rooms.status === "booked" ? "Already booked" : ""}>
            <Space direction="vertical" size={12}>
              <RangePicker
                onChange={SetDates}
                placement="bottomRight"
                size="large"
                className="bg-white text-black rounded-md"
                placeholder={["Check in", "Check out"]}
              />
            </Space>
          </Tooltip>
          <Tooltip title={rooms.status === "booked" ? "Already booked" : ""}>
            <button
              onClick={handleReserveRoom}
              disabled={rooms.status === "Booked"}
              className={`mt-4 w-full max-w-sm px-4 py-2 text-lg font-semibold rounded-md transition duration-300 ${
                rooms.status === "booked"
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-700"
              } text-white`}
            >
              Reserve
            </button>
          </Tooltip>
        </div>
      </div>
      <PopupModal
        isOpen={modalOpen}
        isLoading={modalLoading}
        onReload={handleModalReload}
        onClose={handleModalClose}
        status={rooms.status}
      />
    </div>
  );
};

export default RoomDetail;
