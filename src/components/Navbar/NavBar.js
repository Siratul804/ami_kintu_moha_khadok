import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./navbar.css";
// import Pro from "../../assets/Pro.jpg";

function NavBar() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="muted"
        fixed="top"
        className={`${isSticky ? "nav_bar" : "NavBar"}`}
      >
        <h3 className="text-center  ami_kintu ">
          <a href="/">
            <img src="/icons/name.PNG" alt="" height="70px" width="auto" />
          </a>
        </h3>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{ marginRight: "10px" }}
        />
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="NavBar_Nav">
              <div className="Nav_Link_box">
                <NavLink to="/" className="NavBar_Link_hover">
                  Home
                </NavLink>

                <NavLink to="/about" className="NavBar_Link_hover ">
                  About
                </NavLink>

                <NavLink to="/video" className="NavBar_Link_hover ">
                  Videos
                </NavLink>

                <NavLink to="/projects" className="NavBar_Link_hover ">
                  Projects
                </NavLink>

                <NavLink to="/services" className="NavBar_Link_hover ">
                  Services
                </NavLink>

                <NavLink to="/team" className="NavBar_Link_hover ">
                  Our-Team
                </NavLink>

                <NavLink to="/client" className="NavBar_Link_hover ">
                  Client
                </NavLink>

                <NavLink to="/contact" className="NavBar_Link_hover ">
                  Contact
                </NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
