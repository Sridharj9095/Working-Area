import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

function Userpage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const headers = {
      Authorization: token,
    };
    axios
      .get("http://localhost:8000/user/userlist", { headers })
      .then((response) => {
        setUsers(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        setError("Failed to load users.");
        console.error(error);
      });
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  return (
    <div className="container mt-4">
      <h4 className="mb-4">Employees List</h4>
      {error && <p>{error}</p>}
      <Table responsive striped bordered>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button className="btn btn-danger mb-3" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Userpage;
