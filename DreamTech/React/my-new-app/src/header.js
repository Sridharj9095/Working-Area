import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">DreamTech</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <button>Get Started</button>
      </div>
    </div>
  );
};
export default Header;
