import React from "react";
import { NavLink } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  FaCalendar,
  FaAlignJustify,
  FaReact,
  FaPeopleArrows,
  FaSlack,
} from "react-icons/fa";
function SidebarComponent() {
  return (
    <div className="fullvh">
      <Sidebar>
        <Menu>
          <SubMenu label="Menu bar 1" icon={<FaReact />}>
            <MenuItem icon={<FaCalendar />}>
              <NavLink to="/calendar">Calendar</NavLink>
            </MenuItem>
            <MenuItem icon={<FaAlignJustify />}>Menu 2</MenuItem>
            <MenuItem>Menu 3</MenuItem>
          </SubMenu>
          <SubMenu label="Menu bar 2" icon={<FaPeopleArrows />}>
            <MenuItem>Menu 1</MenuItem>
            <MenuItem>Menu 2</MenuItem>
            <MenuItem>Menu 3</MenuItem>
          </SubMenu>
          <SubMenu label="Menu bar 3" icon={<FaSlack />}>
            <MenuItem>Menu 1</MenuItem>
            <MenuItem>Menu 2</MenuItem>
            <MenuItem>Menu 3</MenuItem>
          </SubMenu>
        </Menu>
        <div className="sidebar-footer">
          <p className="mb-0">&copy; 2024 Your Company</p>
        </div>
      </Sidebar>
    </div>
  );
}

export default SidebarComponent;
