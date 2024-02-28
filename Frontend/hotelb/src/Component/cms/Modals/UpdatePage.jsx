import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

export const UpdatePage = () => {
  const rumid = useParams().id;
  console.log(rumid);

  const [roomData, setRoomData] = useState({
    roomno: "",
    description: "",
    roomtype: "Single",
    capacity: "",
    acnonac: "Ac",
    rent: "",
    status: "Available",
  });

  const onCancel = () => {
    useNavigate(`/cms/rooms`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/rooms/find/${rumid}`)
      .then((response) => {
        setRoomData(response.data);
        console.log(roomData);
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoomData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedRoomData = {
        roomno: roomData.roomno,
        description: roomData.description,
        roomtype: roomData.roomtype,
        capacity: roomData.capacity,
        acnonac: roomData.acnonac,
        rent: roomData.rent,
        status: roomData.status,
      };

      await axios.put(`http://localhost:3000/update/${rumid}`, updatedRoomData);
      setTimeout(() => {
        window.location.reload(true);
        window.location.href = `/cms/rooms`;
      }, 1500);
      toast.success("Room updated successfully!", {
        autoClose: 1000,
        position: "top-right",
        theme: "dark",
        className: "success-toast",
      });
    } catch (error) {
      console.error("Error updating room:", error);
      toast.error("Failed to update room. Please try again later.", {
        autoClose: 3000,
        position: "top-right",
        theme: "dark",
        className: "error-toast",
      });
    }
  };

  return (
    <div
      id="closeModalDiv"
      className="roomAdderModal w-full h-screen fixed inset-0 flex bg-black backdrop-blur-sm bg-opacity-30"
    >
      <ToastContainer />
      <div className="roomAdder rounded-md bg-white">
        <form
          action=""
          className="flex gap-4 flex-row"
          // onSubmit={handleSubmit(roomData._id)}
        >
          <h1 className="text-2xl">Update Room</h1>
          <div className="maininputdiv">
            <div className="leftinputs ">
              <label htmlFor="roomnumber">Room Number</label>

              <input
                type="number"
                name="roomno"
                value={roomData.roomno}
                onChange={handleChange}
                placeholder="Room Number"
                required
              />
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={roomData.description}
                onChange={handleChange}
                cols="20"
                rows="5"
                className="p-2 text-thin border-2 border-blue-300"
              ></textarea>
              <label htmlFor="roomtype">Type of the Room</label>
              <select
                name="roomtype"
                value={roomData.roomtype}
                onChange={handleChange}
                className="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="Single">Single Room</option>
                <option value="Double">Studio</option>
                <option value="Family">Family Room</option>
                <option value="Family">Apartment</option>
              </select>
              <label htmlFor="capacity">Capacity</label>
              <input
                type="number"
                name="capacity"
                value={roomData.capacity}
                onChange={handleChange}
                placeholder="Capacity"
                required
              />
            </div>
            <div className="rightinputs">
              <label htmlFor="AcNonAc">Ac/Non Ac</label>
              <select
                name="acnonac"
                value={roomData.acnonac}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="Single">Ac</option>
                <option value="Non Ac">Non Ac</option>
              </select>
              <label htmlFor="rent">Rent</label>
              <input
                type="number"
                name="rent"
                value={roomData.rent}
                onChange={handleChange}
                placeholder="Rent"
                required
              />
              <label htmlFor="status">Status</label>
              <select
                name="status"
                value={roomData.status}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
              </select>
            </div>
            <div className="buttominputs">
              <button
                type="submit"
                onClick={(e) => handleSubmit(e, roomData._id)}
              >
                Update
              </button>
              <button onClick={() => useNavigate(`/cms/rooms`)}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
