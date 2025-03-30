import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/pages/dashboard";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import Forgotpassword from "./components/pages/forgotpassword";
import Userpage from "./components/pages/userpage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const userToken = localStorage.getItem("authToken");

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/userpage" element={<Userpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
