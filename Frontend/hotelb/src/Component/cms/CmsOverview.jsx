import React from "react";
import { CmsNav } from "./CmsNav";
import { Luggage, BookCheck, Wallet2 } from "lucide-react";
import { useState } from "react";

export const CmsOverview = () => {
  const [bookings, setBookings] = useState(+113);
  const [available, setAvailable] = useState(+535);
  const [expenses, setExpenses] = useState("$ " + 926);

  return (
    <div>
      <CmsNav />
      <div className="cmsmaincontainer">
        <h1 className="text-3xl">Overview</h1>
        <br />
        <div className="mainoverviewcontent flex flex-row gap-[200px] ">
          <div className=" topovdiv basis-1/4 w-10 shadow-lg p-2" id="stat1">
            <Luggage />
            {bookings}
            <a href="#">Total Bookings</a>
          </div>
          <div
            className="topovdiv basis-1/4 w-10 text-slate-900  shadow-lg p-2"
            id="stat2"
          >
            <BookCheck />
            {available}

            <a href="localhost:5173/cms/rooms">Room Available</a>
          </div>
          <div className="topovdiv  basis-1/4 w-10 shadow-lg p-2" id="stat3">
            <Wallet2 />
            {expenses}

            <a href="#">Expenses</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmsOverview;
