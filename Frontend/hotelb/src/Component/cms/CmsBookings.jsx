import React, { useEffect, useState } from "react";
import "../../css/Cms.css";
import { CmsNav } from "./CmsNav";
import { Plus, Trash, Pencil } from "lucide-react";
import { AddRoom } from "./Booking/AddRoom";
import { UpdateRoom } from "./Modals/UpdateRoom";
import axios from "axios";
import { toast } from "react-toastify";

export const CmsBookings = () => {
  const [formData, setFormData] = useState();
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [rooms, setRooms] = useState([]);
  const [Bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/getbookings").then(
      (response) => {
        setBookings(response.data);
        console.log("Booking Fetched");
        console.log(Bookings);
      },
      (error) => {
        console.error("Error fetching Bookings:", error);
      }
    );
  }, []);

  // useEffect(() => {
  //   const filteredData = rooms.filter((room) =>
  //     room.roomtype.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   setFilteredRooms(filteredData);
  // }, [rooms, searchQuery]);

  const handleFilter = (e) => {
    setSearchQuery(e.target.value);
  };

  const [showAddModal, setAddModal] = useState(false);
  const [showUpdateModal, setUpdateModal] = useState(false);

  const onCancel = () => {
    setAddModal(!showAddModal);
  };
  const onClose = () => {
    setUpdateModal(!showUpdateModal);
  };

  const handleDelete = (_id) => {
    const roomId = _id;
    console.log("Deleting booking with id:", roomId);
    try {
      axios.delete(`http://127.0.0.1:3000/deletebooking/${roomId}`);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      toast.success(
        "Booking Deleted Successfully!",

        { position: "top-right", theme: "dark", autoClose: 1000 }
      );
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      {showAddModal && <AddRoom onCancel={onCancel} />}
      {showUpdateModal && <UpdateRoom onCancel={onClose} />}
      <CmsNav doit={handleFilter} />
      <div className="cmsmaincontainer bg-slate-100 w-full h-screen overflow-x-hidden">
        <h1 className="text-3xl">Bookings</h1>
        <br /> <br />
        <button
          className="roomsedit float-end p-4 bg-white shadow-lg border-l-purple-500 hover:bg-black transition-all ease-in-out delay-75 hover:text-white"
          onClick={() => setAddModal(true)}
        >
          <Plus size={20} />
        </button>
        <div className="roomstable   shadow-md p-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">S.N.</th>
                <th className="px-4 py-2">User Name</th>
                <th className="px-4 py-2">Room Type</th>
                <th className="px-4 py-2">Rent </th>
                <th className="px-4 py-2">Update</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {Bookings.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{Bookings.userID}</td>
                  <td className="border px-4 py-2">{Bookings.roomno}</td>
                  <td className="border px-4 py-2">{Bookings.startTime}</td>

                  <td className="border px-4 py-2">Rs. {Bookings.rent}</td>
                  <td
                    className="border px-4 py-2"
                    style={{
                      color: row.status === "Unavailable" ? "red" : "green",
                    }}
                  >
                    {row.status}
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="roomsedit p-2 bg-violet-400"
                      onClick={() => setUpdateModal(true)}
                      style={{ color: "black" }}
                    >
                      <Pencil size={20} />
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      className="roomsedit p-2 bg-violet-400"
                      onClick={() => handleDelete(row._id)}
                    >
                      <Trash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
