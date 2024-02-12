import React from "react";
import { Button, Dropdown, Space } from "antd";
import { UserPlus, User, ChevronDown } from "lucide-react";

const items = [
  {
    key: "1",
    label: (
      <a
        href="/login"
        className="bg-black text-white p-2 rounded-md flex gap-2"
      >
        <User className="text-white" /> <h1 className="text-white">Sign In</h1>
      </a>
    ),
  },
  {
    key: "1",
    label: (
      <a
        href="/signup"
        className="bg-black text-white p-2 rounded-md flex gap-2"
      >
        <UserPlus className="text-white" />{" "}
        <h1 className="text-white">Sign Up</h1>
      </a>
    ),
  },
];

export const HomeDropdown = () => (
  <Space direction="horizontal">
    <Space wrap>
      <Dropdown
        className=" bg-transparent"
        arrow={true}
        menu={{
          items,
        }}
        placement="bottom"
      >
        <Button className="hover:bg-black text-white" tabIndex={-1}>
          <ChevronDown className="text-white" />
        </Button>
      </Dropdown>
    </Space>
  </Space>
);
export default HomeDropdown;
