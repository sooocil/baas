import React from "react";
import img1 from "../../assets/img2.jpg";
import img2 from "../../assets/img3.jpg";

export const RoomDetailImage = () => {
  return (
    <div className="roomDetailImageContainer relative flex flex-col lg:flex-row gap-4 p-6 bg-gray-900">
      <div className="left w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <img
          src={img1}
          className="object-cover w-full h-80 lg:h-full"
          alt="Room Main"
        />
      </div>
      <div className="rightTwo w-full lg:w-1/2 flex flex-col gap-4">
        <div className="rtop w-full h-40 lg:h-1/2 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://assets.wander.com/350050833905221637/1200.webp"
            className="object-cover w-full h-full"
            alt="Room Detail 1"
          />
        </div>
        <div className="rbuttom w-full h-40 lg:h-1/2 rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://assets.wander.com/350302277132615682/1200.webp"
            className="object-cover w-full h-full"
            alt="Room Detail 2"
          />
        </div>
      </div>
    </div>
  );
};
