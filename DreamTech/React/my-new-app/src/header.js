import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">DreamTech</h1>
        <ul>
          <li>
            <Link
              to="/"
              className={activeLink === "/" ? "active" : ""}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={activeLink === "/products" ? "active" : ""}
              onClick={() => handleLinkClick("/products")}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={activeLink === "/services" ? "active" : ""}
              onClick={() => handleLinkClick("/services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeLink === "/about" ? "active" : ""}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={activeLink === "/contact" ? "active" : ""}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Header;
