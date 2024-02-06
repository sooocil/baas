import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Cms.css";
import { CmsNav } from "./CmsNav";
import DataTable from "react-data-table-component";
import { Pencil, Plus, Trash } from "lucide-react";
import { AddRoom } from "./Modals/AddRoom";
import { UpdateRoom } from "./Modals/UpdateRoom";
import axios from "axios";

export const CmsRooms = () => {
  // State for handling data table and form inputs.
  const [formData, setFormData] = useState();
  const [filteredRooms, setFilteredRooms] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const AddButton = () => {
    return (
      <button
        className="roomsedit float-end p-4 bg-violet-400"
        onClick={() => setAddModal(true)}
      >
        <Plus size={20} />
      </button>
    );
  };

  const handleDelete = (id) => {
    axios
      .delete("/deleteroom/" + rooms._id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const DeleteButton = () => {
    return (
      <button
        className="roomsedit float-end p-4 bg-violet-400"
        onClick={(e) => handleDelete(rooms._id)}
      >
        <Trash size={20} />
      </button>
    );
  };

  const UpdateButton = () => {
    return (
      <>
        <button
          className="roomsedit float-end p-4 bg-violet-400"
          onClick={() => setUpdateModal(true)}
          style={{ color: "black" }}
        >
          <Pencil size={24} />
        </button>
      </>
    );
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:3000").then(
      (response) => {
        setRooms(response.data);
      },
      (error) => {
        console.error("Error fetching rooms:", error);
      }
    );
  }, []); // This empty array means the effect runs only once after the initial render

  const [rooms, setRooms] = useState([]);

  const columns = [
    {
      name: "S.N.",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Room Number",
      selector: (row) => row.roomno,
      sortable: true,
    },
    {
      name: "Room Type",
      selector: (row) => row.roomtype,
      sortable: true,
    },
    {
      name: "Capacity",
      selector: (row) => row.capacity,
      sortable: true,
    },
    {
      name: "Ac/Non Ac",
      selector: (row) => row.acnonac,
      sortable: true,
    },
    {
      name: "Rent",
      selector: (row) => "$" + row.rent,
      sortable: true,
      style: {
        color: "green",
      },
    },
    {
      name: "Availability",
      selector: (row) => row.status,
      sortable: true,
      style: (row) =>
        row.status === "Available" ? { color: "red" } : { color: "green" },
    },

    {
      name: "Update",
      cell: (row) => <UpdateButton />,
    },
    {
      name: "Delete",
      cell: (row) => <DeleteButton />,
    },
  ];

  const [records, setRecords] = useState([rooms]);

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
  return (
    <div>
      {showAddModal && <AddRoom onCancel={onCancel} />}
      {showUpdateModal && <UpdateRoom onCancel={onClose} />}
      <CmsNav doit={handleFilter} />
      <div className="cmsmaincontainer bg-slate-100 w-full h-screen overflow-x-hidden">
        <h1 className="text-3xl">Rooms</h1>
        <br /> <br />
        <AddButton />
        {/* <DeleteButton /> */}
        <div className="roomstable   shadow-md p-4">
          <DataTable
            columns={columns}
            data={filteredRooms}
            pagination
            fixedHeader
            responsive
            highlightOnHover
            showGridlines
            pointerOnHover
            selectableRows
            selectableRowsHighlight
            striped
          />
        </div>
      </div>
    </div>
  );
};
