import React from "react";
import { useState } from "react";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import "../../css/home.css";
import { Heart, UserPlus, User, Search } from "lucide-react";

export const DatePickerpick = () => {
  const [dateString, setDateString] = useState(["", ""]);

  const checkValue = (value, dateString, e) => {
    if (dateString[0] && dateString[1]) {
      setDateString(dateString);
    }
  };
  const nullInput = (dataString, e) => {
    if (dataString == ["", ""] || dataString === undefined) {
      e.preventDefault();
      console.log("Please select a date");
    }
  };

  return (
    <Space direction="horizontal" color="black" size={10}>
      <RangePicker
        className="rangePicker placeholder-text-white text-black bg-white hover:border-blue-500 border-2 text-2xl hover:bg-white  p-1 hover:rounded-md transition-all"
        size="large"
        color="black"
        placeholder={["When"]}
        capture="hover"
        variant="filled"
        onChange={checkValue}
      />
      <Search
        onClick={nullInput}
        className="hover:bg-black rounded-lg hover:text-white p-1 hover:rounded-md transition-all duration-300 ease-in-out  active:scale-95 text-2xl  "
        size={35}
      />
    </Space>
  );
};
