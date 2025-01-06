import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
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

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateRegister = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      swal("Error!", "Passwords do not match!", "error");
      return;
    }

    let formData = {
      firstName,
      lastName,
      email,
      password,
    };

    axios
      .post("http://localhost:8000/user/adduser", formData)
      .then((response) => {
        if (response.data.id) {
          swal("Success!", "Registered successfully!", "success");
          window.location.href = "/login";
        } else {
          swal("Error!", "Registration failed", "error");
        }
      })
      .catch((error) => {
        console.log("Error", error);
        swal(
          "Oops!",
          error.response.data.error || "Registration failed",
          "error"
        );
      });
  };

  return (
    <div className="container-body d-flex flex-column justify-content-between">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="my-0">
            <Card>
              <Card.Header className="text-center">
                <h1 className="fs-3 my-4">Register</h1>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={validateRegister} className="text-center">
                  <Row className="mb-3">
                    <Col>
                      <FloatingLabel controlId="firstName" label="First Name">
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          value={firstName}
                          onChange={(event) => setFirstName(event.target.value)}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel controlId="lastName" label="Last Name">
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={(event) => setLastName(event.target.value)}
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>

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

                  <Row className="mb-3">
                    <Col>
                      <FloatingLabel controlId="password" label="Password">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel
                        controlId="confirmPassword"
                        label="Confirm Password"
                      >
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(event) =>
                            setConfirmPassword(event.target.value)
                          }
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>

                  <InputGroup.Text className="justify-content-between align-items-center my-3 px-5 border-0 bg-white">
                    <Form.Check
                      type="checkbox"
                      label={showPassword ? "Hide Passwords" : "Show Passwords"}
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                    />
                  </InputGroup.Text>

                  <Button variant="primary" type="submit" className="py-1 px-5">
                    Register
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
