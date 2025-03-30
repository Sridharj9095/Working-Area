import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const { Search } = Input;

const suffix = <AudioOutlined className="text-black-50 fs-6" />;

const onSearch = (value) => {
  console.log("Search value:", value);
};

const Searchbar = () => {
  return (
    <Space direction="vertical" size="middle">
      <Search
        placeholder="Search for..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        suffix={suffix}
        className="m-3"
      />
    </Space>
  );
};

export default Searchbar;
