function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1 className="logo">Logo</h1>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <button>Get Started</button>
      </div>
    </div>
  );
}
export default Header;
