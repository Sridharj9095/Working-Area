import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  LayoutOutlined,
  TableOutlined,
  DashboardOutlined,
  TeamOutlined,
  BookOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<Link to="/">Dashboard</Link>, "1", <DashboardOutlined />),
  getItem("Layouts", "2", <LayoutOutlined />),
  getItem("Pages", "sub1", <BookOutlined />, [
    getItem(<Link to="/login">Login</Link>, "3"),
    getItem(<Link to="/register">Register</Link>, "4"),
    getItem(<Link to="/forgotpassword">Forgot Password</Link>, "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("User", "6"),
    getItem("Error", "sub3", null, [
      getItem("401 Page", "7"),
      getItem("404 Page", "8"),
    ]),
  ]),
  getItem("Charts", "9", <AreaChartOutlined />),
  getItem("Tables", "10", <TableOutlined />),
];

const Sidenavbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="text-white m-3 fs-3 text-center">
        {collapsed ? "AP" : "Admin Panel"}
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidenavbar;
