import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import "../style/navigationBar.css";

function NavigationBar() {
  const data = JSON.parse(window.localStorage.getItem("register"));
  // const isLogin = JSON.parse(window.localStorage.getItem("isLogin"));
  const [login, setLogin] = useState();

  const isLogin = () => {
    return setLogin(JSON.parse(window.localStorage.getItem("isLogin")));
  };

  useEffect(() => {
    isLogin();
  }, [login]);

  console.log(login);

  return (
    <div>
      <Navbar expand="lg" className="navigationBar">
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            <Link to="/home" className="text-white text-decoration-none">
              FreeAnime
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="#home">
                <Link to="/" className="text-white text-decoration-none">
                  Login
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white" href="#link">
                <Link
                  to="/register"
                  className="text-white text-decoration-none"
                >
                  Register
                </Link>
              </Nav.Link>
              {login ? (
                <NavDropdown title={data.name} id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    <Link
                      to="/profile"
                      className="text-dark text-decoration-none"
                    >
                      Profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Log Out</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <div style={{ display: "none" }}></div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default NavigationBar;
