import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendar from "./components/calendar";
import SidebarComponent from "./components/sidebar";
import AntDesign from "./components/antdesign";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <AntDesign />
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
        <SidebarComponent />
      </div>
    </BrowserRouter>
  );
};

export default App;
