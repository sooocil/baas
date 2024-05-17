import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../css/Cms.css";

export const AddRoom = ({ onCancel }) => {
  const closeModal = (e) => {
    if (e.target.id === "closeModalDiv") {
      onCancel();
    }
  };

  const [roomNo, setRoomNo] = useState("");
  const [username, setUsername] = useState("");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  const submitRoomAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/booking/addrooms", {
        roomNo,
        username,
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
      toast.success("Room Added Successfully!");
    } catch (err) {
      console.error("Error adding room:", err);
    }
  };

  return (
    <div
      id="closeModalDiv"
      className="roomAdderModal w-full h-screen fixed inset-0 flex bg-black   backdrop-blur-sm bg-opacity-30"
    >
      <ToastContainer />

      <div className="roomAdder bg-white rounded-xl">
        <form
          action=""
          className="flex gap-4 flex-row"
          onSubmit={submitRoomAdd}
        >
          <h1 className="text-2xl">Add New Room</h1>
          <div className="maininputdiv">
            <div className="leftinputs ">
              <label htmlFor="roomnumber">Room Number</label>
              <select
                name="roomno"
                id="roomNo"
                value={roomNo}
                onChange={(e) => setRoomNo(e.target.value)}
                required
              >
                <option value="">Select a Room No.</option>
                {rooms.map((room) => (
                  <option key={room._id} value={room.roomno}>
                    {room.roomno}
                  </option>
                ))}
              </select>

              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Add Room
          </button>
          <X
            className="cursor-pointer"
            onClick={(e) => closeModal(e)}
            id="closeModalDiv"
          />
        </form>
      </div>
    </div>
  );
};
