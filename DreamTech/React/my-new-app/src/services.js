import { useState } from "react";

const Services = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [namePatternError, setNamePatternError] = useState(false);
  const [emailPatternError, setEmailPatternError] = useState(false);
  const [mobilePatternError, setMobilePatternError] = useState(false);

  const validateForm = (event) => {
    event.preventDefault();

    let isValid = true;

    if (!name.trim()) {
      setNameError(true);
      setNamePatternError(false);
      isValid = false;
    } else {
      const namePattern = /^[A-Za-z\s]+$/;
      if (name.length < 3) {
        setNamePatternError(true);
        setNameError(false);
        isValid = false;
      } else if (!namePattern.test(name.trim())) {
        setNamePatternError(true);
        setNameError(false);
        isValid = false;
      } else {
        setNameError(false);
        setNamePatternError(false);
      }
    }

    if (!email) {
      setEmailError(true);
      setEmailPatternError(false);
      isValid = false;
    } else {
      const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (emailPattern.test(email)) {
        setEmailError(false);
        setEmailPatternError(false);
      } else {
        setEmailPatternError(true);
        setEmailError(false);
        isValid = false;
      }
    }

    if (!mobile) {
      setMobileError(true);
      setMobilePatternError(false);
      isValid = false;
    } else {
      const mobilePattern = /^\d{10}$/;
      if (mobilePattern.test(mobile)) {
        setMobileError(false);
        setMobilePatternError(false);
      } else {
        setMobilePatternError(true);
        setMobileError(false);
        isValid = false;
      }
    }

    if (isValid) {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Mobile:", mobile);
      console.log("Form submitted successfully!");
    }
  };

  const inputFieldValidate = (event) => {
    const inputFieldId = event.target.id;
    const inputFieldValue = event.target.value;
    if (inputFieldId === "uname") {
      setName(inputFieldValue);
    }
    if (inputFieldId === "email") {
      setEmail(inputFieldValue);
    }
    if (inputFieldId === "mobile") {
      setMobile(inputFieldValue);
    }
  };

  return (
    <div className="banner">
      <form onSubmit={validateForm}>
        <div className="form-group">
          <label>Full Name</label>
          <div className="inputarea">
            <input
              type="text"
              id="uname"
              className="inputfield"
              placeholder="Enter your name"
              value={name}
              onChange={inputFieldValidate}
            />
            {nameError ? (
              <span className="warning">Name is Required.</span>
            ) : (
              ""
            )}
            {namePatternError ? (
              <span className="warning">Enter a valid name.</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <div className="inputarea">
            <input
              type="text"
              id="email"
              className="inputfield"
              placeholder="Enter your email"
              value={email}
              onChange={inputFieldValidate}
            />
            {emailError ? (
              <span className="warning">Email is Required.</span>
            ) : (
              ""
            )}
            {emailPatternError ? (
              <span className="warning">Enter a valid email.</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="form-group">
          <label>Mobile number</label>
          <div className="inputarea">
            <input
              type="number"
              id="mobile"
              className="inputfield"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={inputFieldValidate}
            />
            {mobileError ? (
              <span className="warning">Mobile number is required</span>
            ) : (
              ""
            )}
            {mobilePatternError ? (
              <span className="warning">Number should be 10 digits.</span>
            ) : (
              ""
            )}
          </div>
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
