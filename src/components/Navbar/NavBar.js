import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
              <Nav.Link href="/" className=" NavBar_Link  ">
                <Link to="/" className="NavBar_Link_hover ">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="/about" className=" NavBar_Link  ">
                <Link to="/about" className="NavBar_Link_hover ">
                  About
                </Link>
              </Nav.Link>

              <Nav.Link href="/video" className=" NavBar_Link  ">
                <Link to="/video" className="NavBar_Link_hover ">
                  Videos
                </Link>
              </Nav.Link>
              <Nav.Link href="/projects" className=" NavBar_Link  ">
                <Link to="/projects" className="NavBar_Link_hover ">
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link href="/services" className=" NavBar_Link  ">
                <Link to="/services" className="NavBar_Link_hover ">
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link className=" NavBar_Link  ">
                <Link to="/team" className="NavBar_Link_hover ">
                  Our-Team
                </Link>
              </Nav.Link>
              <Nav.Link className=" NavBar_Link  ">
                <Link to="/client" className="NavBar_Link_hover ">
                  Client
                </Link>
              </Nav.Link>
              <Nav.Link className=" NavBar_Link  ">
                <Link to="/contact" className="NavBar_Link_hover ">
                  Contact
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
