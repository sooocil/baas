import React from "react";
import { useState } from "react";
import { CmsNav } from "./CmsNav";
import DataTable from "react-data-table-component";
import { Pencil } from "lucide-react";

export const CmsRooms = () => {
  // State for handling data table and form inputs.
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState();

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
      selector: (row) => row.rent,
      sortable: true,
    },
    {
      name: "Availability",
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: "",
      cell: (row) => (
        <button className="roomsedit p-4" style={{ color: "black" }}>
          <Pencil size={20} />
        </button>
      ),
    },
  ];

  const rooms = [
    {
      id: "1",
      roomno: "203",
      roomtype: "Single",
      acnonac: "Non-AC",
      capacity: 1,
      rent: "$50",
      status: "Available",
    },
    {
      id: "5",
      roomno: "204",
      roomtype: "Apartment",
      acnonac: "AC",
      capacity: 2,
      rent: "$85",
      status: "Booked",
    },
    {
      id: "3",
      roomno: "207",
      roomtype: "Studio",
      acnonac: "Non-AC",
      capacity: 2,
      rent: "$65",
      status: "Available",
    },
  ];

  const [records, setRecords] = useState(rooms);
  function handleFilter(event) {
    const newData = rooms.filter((row) => {
      return row.roomtype
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }

  return (
    <div>
      <CmsNav doit={handleFilter} />
      <div className="cmsmaincontainer bg-slate-100 w-full h-screen overflow-x-hidden">
        <h1 className="text-3xl">Rooms</h1>
        <br /> <br />
        <div className="roomstable   shadow-md p-4">
          <DataTable
            columns={columns}
            data={records}
            pagination
            fixedHeader
            responsive
            striped
            className="bg-violet-300"
          />
        </div>
      </div>
    </div>
  );
};
