import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

function User() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        setError("Failed to load users.");
        console.error(error);
      });
  }, []);

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
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td>{user.id}</td>
              <td>{`${user.first_name} ${user.last_name}`}</td>
              <td>{user.email}</td>
              <td>
                <img
                  src={user.avatar}
                  alt={`${user.first_name} ${user.last_name}`}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default User;
