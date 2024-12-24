import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login";
import Dashboard from "./components/dashboard/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const userToken = localStorage.getItem("authToken");
  console.log("UserToken :", userToken);

  return (
    <BrowserRouter>
      {userToken != null ? (
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
