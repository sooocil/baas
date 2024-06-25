import { useState, useEffect } from "react";
import axios from "axios";
import img1 from "../../assets/homebg1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

export const RoomContents = () => {
  const [roomdata, setRoomData] = useState([]);

  useEffect(() => {
    // Example axios call
    axios
      .get("https://localhost:3000/rooms")

      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  return roomdata;
};

// module.exports = { RoomContents };

export default RoomContents;