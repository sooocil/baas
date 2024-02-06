//Modal For => Add Room

import React from "react";
import "../../../css/Cms.css";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

export const UpdateRoom = (onCancel) => {
  const id = useParams();
  const closeModal = (e) => {
    if (e.target.Id === "closeModalDiv") {
      onClose();
    }
  };

  const [roomno, setRoomNo] = useState();
  const [roomtype, setRoomType] = useState("single");
  const [capacity, setCapacity] = useState();
  const [acnonac, setAcNonAc] = useState("Ac");
  const [rent, setRent] = useState();
  const [status, setStatus] = useState("Available");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3000/update/" + id)
      .then((result) => {
        console.log(result);
        setRoomNo(result.roomno);
        setRoomType(result.roomtype);
        setCapacity(result.capacity);
        setAcNonAc(result.acnonac);
        setRent(result.rent);
        setStatus(result.status);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      id="closeModalDiv"
      className="roomAdderModal w-full h-screen fixed inset-0 flex bg-black   backdrop-blur-sm bg-opacity-30"
    >
      <div className="roomAdder">
        <form
          action=""
          className="flex gap-4 flex-row"
          // onSubmit={}
        >
          <h1 className="text-2xl text-teal-600">Update Room</h1>
          <div className="maininputdiv">
            <div className="leftinputs ">
              <label htmlFor="roomnumber">Room Number</label>
              <input
                type="number"
                placeholder="Room Number"
                onChange={(e) => {
                  setRoomNo(e.target.value);
                }}
                value={roomno}
                required
              />
              <label htmlFor="roomtype">Type of the Room</label>
              <select
                className="bg-gray-50 border   text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="Room Type"
                id="roomType"
                onChange={(e) => setRoomType(e.target.value)}
                required
                value={roomtype}
              >
                <option value="Single">Single Room</option>
                <option value="Double">Double Room</option>
                <option value="Family">Apartment</option>
                <option value="Family">Studio</option>
                <option value="Family">Flat</option>
              </select>
              <label htmlFor="capacity">Capacity</label>
              <input
                type="number"
                placeholder="Capacity"
                onChange={(e) => setCapacity(Number(e.target.value))}
                required
                value={capacity}
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
                value={acnonac}
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
                value={rent}
              />
              <label htmlFor="status">Status</label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="Status"
                id="Status"
                onChange={(e) => setStatus(e.target.value)}
                required
                value={status}
              >
                <option value="Single">Available</option>
                <option value="Non Ac">Booked</option>
              </select>
            </div>
            <div className="buttominputs">
              <button>Update</button>
              <button onClick={onCancel.onCancel}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
