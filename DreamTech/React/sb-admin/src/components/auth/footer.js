import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p className="m-0">Copyright © Your Website 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
