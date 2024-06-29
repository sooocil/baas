import React from "react";
import "../../../css/Cms.css";
import { X } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddRoom = ({ onCancel }) => {
  const closeModal = (e) => {
    if (e.target.id === "closeModalDiv") {
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
      alert("Room Number exists");
      console.error("Error adding room:", err);
    }
  };

  return (
    <div
      id="closeModalDiv"
      className="roomAdderModal w-full h-screen fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
      onClick={closeModal}
    >
      <ToastContainer />
      <div className="roomAdder bg-white rounded-xl p-8 shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onCancel}
        >
          <X />
        </button>
        <form
          action=""
          className="space-y-4"
          onSubmit={submitRoomAdd}
        >
          <h1 className="text-2xl font-bold mb-4 text-center">Add New Room</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="roomnumber" className="block text-sm font-medium text-gray-700">
                Room Number
              </label>
              <input
                type="number"
                placeholder="Room Number"
                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setRoomNo(e.target.value)}
                required
              />
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                cols="20"
                rows="5"
                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <label htmlFor="roomtype" className="block text-sm font-medium text-gray-700 mt-4">
                Type of the Room
              </label>
              <select
                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Room Type"
                id="roomType"
                onChange={(e) => setRoomType(e.target.value)}
                required
              >
                <option value="Single">Single Room</option>
                <option value="Double">Studio</option>
                <option value="Family">Family Room</option>
                <option value="Apartment">Apartment</option>
              </select>
            </div>
            <div>
              <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
                Capacity
              </label>
              <input
                type="number"
                placeholder="Capacity"
                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setCapacity(Number(e.target.value))}
                required
              />
              <label htmlFor="AcNonAc" className="block text-sm font-medium text-gray-700 mt-4">
                AC/Non AC
              </label>
              <select
                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Ac/NonAc"
                id="AcNonAc"
                onChange={(e) => setAcNonAc(e.target.value)}
                required
              >
                <option value="Ac">AC</option>
                <option value="Non Ac">Non AC</option>
              </select>
              <label htmlFor="rent" className="block text-sm font-medium text-gray-700 mt-4">
                Rent
              </label>
              <input
                type="number"
                placeholder="Rent"
                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setRent(Number(e.target.value))}
                required
              />
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mt-4">
                Status
              </label>
              <select
                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Status"
                id="Status"
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
