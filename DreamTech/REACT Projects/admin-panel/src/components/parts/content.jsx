import React from "react";
import { Breadcrumb } from "antd";
import { Outlet, useLocation, Link } from "react-router-dom";

const Content = () => {
  const location = useLocation();

  const generateBreadcrumbItems = () => {
    const pathnames = location.pathname.split("/").filter(Boolean);
    return [
      { name: "Dashboard", path: "/" },
      ...pathnames.map((segment, index) => ({
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        path: `/${pathnames.slice(0, index + 1).join("/")}`,
      })),
    ];
  };

  return (
    <div className="mx-4 flex-grow-1">
      <Breadcrumb className="my-4">
        {generateBreadcrumbItems().map((item, index) => (
          <Breadcrumb.Item key={index}>
            {index === generateBreadcrumbItems().length - 1 ? (
              item.name
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>

      <div className="bg-white p-4 rounded-3 shadow-sm">
        {location.pathname === "/" && (
          <h3 className="text-primary">Welcome to the Dashboard</h3>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
