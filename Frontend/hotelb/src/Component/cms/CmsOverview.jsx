import React from "react";
import { CmsNav } from "./CmsNav";
import { Luggage, BookCheck, Wallet2 } from "lucide-react";

export const CmsOverview = () => {
  return (
    <div>
      <CmsNav />
      <div className="cmsmaincontainer">
        <h1 className="text-3xl">Overview</h1>
        <br />
        <div className="mainoverviewcontent flex flex-row gap-[200px] ">
          <div className="topovdiv basis-1/4 w-10 shadow-lg p-2" id="stat1">
            <Luggage />
            <a href="#">Total Bookings</a>
          </div>
          <div className="topovdiv basis-1/4 w-10 shadow-lg p-2" id="stat2">
            <BookCheck />
            <a href="#">Room Available</a>
          </div>
          <div className="topovdiv  basis-1/4 w-10 shadow-lg p-2" id="stat3">
            <Wallet2 />
            <a href="#">Expenses</a>
          </div>
        </div>
      </div>
    </div>
  );
};
