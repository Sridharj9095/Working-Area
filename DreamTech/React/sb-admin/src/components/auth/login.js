import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Footer from "./footer";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FloatingLabel,
} from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateLogin = (event) => {
    event.preventDefault();
    let formData = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/login", formData)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token);
          window.location.href = "/dashboard";
          swal("Success!", "Logged in successfully!", "success");
        } else {
          swal("Error!", "No token returned", "error");
        }
      })
      .catch((error) => {
        console.log("Error", error);
        swal("Oops!", error.response.data.error.toUpperCase(), "error");
      });
  };

  return (
    <div className="container-body d-flex flex-column min-vh-100 justify-content-between">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="mt-5">
            <Card>
              <Card.Header className="text-center">
                <h1 className="fs-3 my-4">Login</h1>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={validateLogin}>
                  <FloatingLabel
                    controlId="email"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="password"
                    label="Password"
                    className="mb-3"
                  >
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </FloatingLabel>
                  <InputGroup.Text className="justify-content-between align-items-center my-3 px-5 border-0 bg-white">
                    <Form.Check
                      type="checkbox"
                      label={showPassword ? "Hide Password" : "Show Password"}
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <Button
                      variant="primary"
                      type="submit"
                      className="py-1 px-5"
                    >
                      Login
                    </Button>
                  </InputGroup.Text>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
