import React from "react";
import { Layout } from "antd";
import Searchbar from "./searchbar";

const { Header: AntHeader } = Layout;

const Header = () => {
  return (
    <AntHeader className="bg-white p-0">
      <Searchbar />
    </AntHeader>
  );
};

export default Header;
