import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import User from "./user";

const Dashboard = () => {
  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary dashboard">
        <Container>
          <Navbar.Brand>
            <h1 className="fs-4 text-white">Welcome to the Dashboard</h1>
          </Navbar.Brand>
          <Button
            className="signout bg-danger"
            id="logout"
            onClick={handleSignOut}
          >
            Signout
          </Button>
        </Container>
      </Navbar>
      <User />
    </>
  );
};

export default Dashboard;
