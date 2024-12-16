import { useState } from "react";

const Services = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const validateForm = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
  };

  return (
    <div className="banner">
      <form onSubmit={validateForm}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            id="uname"
            className="inputfield"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            id="email"
            className="inputfield"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mobile number</label>
          <input
            type="number"
            id="mobile"
            className="inputfield"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(event) => setMobile(event.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submitbtn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Services;
