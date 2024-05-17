import React from "react";
import { useEffect, useState } from "react";
import "../../css/Cms.css";
import { CmsNav } from "./CmsNav";
import { Plus, Trash, Pencil, Users } from "lucide-react";
import { AddRoom } from "./Modals/AddRoom";
import { UpdateRoom } from "./Modals/UpdateRoom";
import axios from "axios";
import { toast } from "react-toastify";

export const CmsGuests = () => {
  const [filteredUser, setFilteredUser] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/users").then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        console.error("Error fetching guests:", error);
      }
    );
  }, []);

  const handleDelete = (_id) => {
    const roomId = _id;
    console.log("Deleting room with id:", roomId);
    try {
      axios.delete(`http://127.0.0.1:3000/api/users/delete/${roomId}`);
      setTimeout(() => {
        window.location.reload();
      }, 800);
      toast.success(
        "Guest Deleted Successfully!",

        { position: "top-right", theme: "dark", autoClose: 800 }
      );
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const filteredData = users.filter((users) =>
      users.username.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUser(filteredData);
  }, [users, searchQuery]);

  const handleFilter = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="cmsGuest">
      <CmsNav doit={handleFilter} />
      <div className=" cmsmaincontainer bg-slate-100 w-full h-screen overflow-x-hidden mainGuestContainer">
        <h1 className="text-3xl">Guests</h1>
        <div className="roomstable   shadow-md p-4">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">S.N.</th>

                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Bookings</th>
                <th className="px-4 py-2">Total spending </th>
              </tr>
            </thead>
            <tbody>
              {filteredUser.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{row.username}</td>
                  <td className="border px-4 py-2">{row.email}</td>
                  <td className="border px-4 py-2">{row.bookings}</td>

                  <td className="text-green-600 border px-4 py-2">
                    Rs. {row.spending}
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
