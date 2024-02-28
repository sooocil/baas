//Modal For => Add Room

import React from "react";
import "../../../css/Cms.css";
import { X } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddRoom = (onCancel) => {
  const closeModal = (e) => {
    if (e.target.Id === "closeModalDiv") {
      onCancel();
    }
  };

  const [roomno, setRoomNo] = useState();
  const [roomtype, setRoomType] = useState("single");
  const [capacity, setCapacity] = useState();
  const [acnonac, setAcNonAc] = useState("Ac");
  const [rent, setRent] = useState();
  const [status, setStatus] = useState("Available");

  const submitRoomAdd = async (e) => {
    e.preventDefault();
    try {
      const description = document.getElementById("description").value;

      await axios.post("http://localhost:3000/addrooms", {
        roomno,
        description,
        roomtype,
        capacity,
        acnonac,
        rent,
        status,
      });
      setTimeout(() => {
        window.location.reload(true);
      }, 1000);
      toast.success("Room Added Successfully!");
    } catch (err) {
      alert("Room Number exist");

      console.error("Error adding room:", err);
      // Handle error here, e.g., show an error message to the user
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
              <input
                type="number"
                placeholder="Room Number"
                onChange={(e) => {
                  setRoomNo(e.target.value);
                }}
                required
              />
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                cols="20"
                rows="5"
                className="p-2 text-thin border-2 border-blue-300"
              ></textarea>
              <label htmlFor="roomtype">Type of the Room</label>
              <select
                className="bg-gray-50 border   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="Room Type"
                id="roomType"
                onChange={(e) => setRoomType(e.target.value)}
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
                placeholder="Capacity"
                onChange={(e) => setCapacity(Number(e.target.value))}
                required
              />
            </div>
            <div className="rightinputs">
              <label htmlFor="AcNonAc">Ac/Non Ac</label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="Ac/NonAc"
                id="AcNonAc"
                onChange={(e) => setAcNonAc(e.target.value)}
                required
              >
                <option value="Single">Ac</option>
                <option value="Non Ac">Non Ac</option>
              </select>
              <label htmlFor="rent">Rent</label>
              <input
                type="number"
                placeholder="Rent"
                onChange={(e) => {
                  setRent(Number(e.target.value));
                }}
                required
              />
              <label htmlFor="status">Status</label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="Status"
                id="Status"
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
              </select>
            </div>
            <div className="buttominputs">
              <button>Add</button>
              <button onClick={onCancel.onCancel}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
