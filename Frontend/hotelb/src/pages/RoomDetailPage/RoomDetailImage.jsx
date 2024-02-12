import React from "react";
import img1 from "../../assets/img2.jpg";
import img2 from "../../assets/img3.jpg";
export const RoomDetailImage = () => {
  return (
    <div>
      <div className="roomDetailImageContainer relative top-0 left-0 bg-black ">
        <div className="left rounded-md select-none  ">
          <img src={img1} className="object-cover z-10" alt="" />
        </div>
        <div className="rightTwo select-none bg-black ">
          <div className="rtop select-none">
            <img
              src="https://assets.wander.com/350050833905221637/1200.webp"
              className="object-cover "
              alt=""
            />
          </div>
          <div className="rbuttom select-none ">
            <img
              src="https://assets.wander.com/350302277132615682/1200.webp"
              className="object-cover "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
