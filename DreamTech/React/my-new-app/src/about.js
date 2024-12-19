import { useState, useEffect } from "react";

const About = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => {
        setError("Failed to load users.");
        console.log(error);
      });
  }, []);

  return (
    <div
      className={`banner userbanner ${
        users.length === 0 || error ? "no-users" : ""
      }`}
    >
      <h4>Employees List</h4>
      {error && <p>{error}</p>}
      {users.length === 0 && !error ? (
        <p>No users found.</p>
      ) : (
        <ul className="usermenu">
          {users.map((user) => (
            <li key={user.id} className="userlist">
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
              />
              <p>
                {user.first_name} {user.last_name}
              </p>
              {user.email && (
                <a href={`mailto:${user.email}`} className="usermail">
                  Contact
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default About;
