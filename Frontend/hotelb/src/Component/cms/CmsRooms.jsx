import React, { useEffect, useState } from "react";
import "../../css/Cms.css";
import { CmsNav } from "./CmsNav";
import { Plus, Trash, Pencil } from "lucide-react";
import { AddRoom } from "./Modals/AddRoom";
import { UpdateRoom } from "./Modals/UpdateRoom";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export const CmsRooms = () => {
  const [formData, setFormData] = useState();
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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

  useEffect(() => {
    const filteredData = rooms.filter((room) =>
      room.roomtype.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRooms(filteredData);
  }, [rooms, searchQuery]);

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
    console.log("Deleting room with id:", roomId);
    try {
      axios.delete(`http://127.0.0.1:3000/deleteroom/${roomId}`);
      setTimeout(() => {
        window.location.reload();
      }, 800);
      toast.success(
        "Room Deleted Successfully!",

        { position: "top-right", theme: "dark", autoClose: 800 }
      );
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const updaterAndIdparser = (id) => {
    useNavigate(`/cms/rooms/update/${id}`);
    setFormData(_id);
    setUpdateModal(true);
  };

  return (
    <div>
      {showAddModal && <AddRoom onCancel={onCancel} />}
      {showUpdateModal && <UpdateRoom onCancel={onClose} />}
      <CmsNav doit={handleFilter} />
      <div className="cmsmaincontainer bg-slate-100 w-full h-screen overflow-x-hidden">
        <h1 className="text-3xl">Rooms</h1>
        <br /> <br />
        <button
          className="roomsedit float-end p-4 bg-violet-400 shadow-lg border-l-purple-500 hover:bg-black transition-all ease-in-out delay-75 hover:text-white"
          onClick={() => setAddModal(true)}
        >
          <Plus size={20} />
        </button>
        <div className="roomstable   shadow-md p-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">S.N.</th>
                <th className="px-4 py-2">Room Number</th>
                <th className="px-4 py-2">Room Type</th>
                <th className="px-4 py-2">Capacity</th>
                <th className="px-4 py-2">Ac/Non Ac</th>
                <th className="px-4 py-2">Rent (per day)</th>
                <th className="px-4 py-2">Availability</th>
                <th className="px-4 py-2">Update</th>
                <th className="px-4 py-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredRooms.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{row.roomno}</td>
                  <td className="border px-4 py-2">{row.roomtype}</td>
                  <td className="border px-4 py-2">{row.capacity}</td>
                  <td className="border px-4 py-2">{row.acnonac}</td>
                  <td className="border px-4 py-2">Rs. {row.rent}</td>
                  <td
                    className="border px-4 py-2"
                    style={{
                      color: row.status === "Available" ? "green" : "red",
                    }}
                  >
                    {row.status}
                  </td>
                  <td className="border px-4 py-2">
                    <Link
                      to={`/cms/rooms/update/${row._id}`}
                      className="roomsedit p-2  bg-violet-400 "
                      onClick={
                        () => console.log(row._id)
                        // updaterAndIdparser(row._id)
                      }
                    >
                      <Pencil size={20} />
                    </Link>
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
