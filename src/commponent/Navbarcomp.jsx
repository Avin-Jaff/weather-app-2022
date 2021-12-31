import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
export default function Navbarcomp() {
  return (
    <div>
      <Navbar>
        <Container>
          <Nav className="me-auto">
            <Link to="/" className="navbarlinkStyle">
              Home
            </Link>

            <Link to="/about" className="navbarlinkStyle">
              Weather
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
