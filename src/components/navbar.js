import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
export default function NavBar(props) {
  return (
    <div>
      <Navbar
        bg={props.mode === "dark" ? "1c1e20" : "light"}
        className="shadow p-3 mb-5 "
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            {props.Nav}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link
                style={{ color: props.mode === "dark" ? "white" : "black" }}
              >
                Home
              </Nav.Link>
            </Nav>
            <div class="form-check form-switch mt-3 ">
              <input
                className="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault "
                onClick={props.toggle}
              />
              <p className="mx-2">Enable Dark Mood</p>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
