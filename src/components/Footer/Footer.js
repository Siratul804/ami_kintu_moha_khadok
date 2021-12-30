import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <MDBFooter className=" footer_clr page-footer font-small lighten-5 pt-0">
        <div style={{ backgroundColor: "#f6f5fb" }}>
          <MDBContainer>
            <MDBRow className="py-4 d-flex align-items-center">
              <MDBCol
                md="6"
                lg="5"
                className="text-center text-md-left mb-4 mb-md-0"
              >
                <h6 className="mb-0 white-text">
                  <b>Get connected with us ! </b>
                </h6>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>আমি কিন্তু মহা খাদক</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />

              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                <br />
                eiusmod tempor incididunt ut labore et dolore magna
              </p>
            </MDBCol>
            <MDBCol
              md="2"
              lg="2"
              xl="1"
              className="mb-4 px-2 dark-grey-text txt_al "
            >
              <h6 className="text-uppercase font-weight-bold">
                <strong>Links</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <br />
              <p>
                <a
                  href="/about"
                  style={{ textDecoration: "none" }}
                  className="text-muted"
                >
                  About
                </a>
              </p>
              <p>
                <a
                  href="/projects"
                  style={{ textDecoration: "none" }}
                  className="text-muted"
                >
                  Projects
                </a>
              </p>
              <p>
                <a
                  href="/services"
                  style={{ textDecoration: "none" }}
                  className="text-muted"
                >
                  Services
                </a>
              </p>
              <p>
                <a
                  href="/contact"
                  style={{ textDecoration: "none" }}
                  className="text-muted"
                >
                  Contact
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="5" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Featured Service</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />

              <p
                href="/Man"
                className="dark-grey-text"
                style={{
                  textDecoration: "none",
                  color: "#de0562",
                  fontWeight: "bold",
                }}
              >
                Digital Marketing
              </p>

              <p
                href="/Woman"
                className="dark-grey-text"
                style={{
                  textDecoration: "none",
                  color: "#de0562",
                  fontWeight: "bold",
                }}
              >
                Brand Promoting
              </p>

              <p
                href="/Woman"
                className="dark-grey-text"
                style={{
                  textDecoration: "none",
                  color: "#de0562",
                  fontWeight: "bold",
                }}
              >
                Food Promoting
              </p>

              <p
                href="/Woman"
                className="dark-grey-text"
                style={{
                  textDecoration: "none",
                  color: "#de0562",
                  fontWeight: "bold",
                }}
              >
                Restudent Marketing
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mb-4 dark-grey-text">
              <h6 className="text-uppercase font-weight-bold">
                <strong>Contact</strong>
              </h6>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />

              <p>
                <img src="/icons/gmail.png" alt="" height="25px" width="25px" />
                <i className="fa fa-envelope mr-3" /> mohakhadok@example.com
              </p>
              <p>
                <img
                  src="/icons/telephone.png"
                  alt=""
                  height="25px"
                  width="25px"
                />
                <i className="fa fa-phone mr-3" /> +088 01744126396
              </p>
              <p>
                <img
                  src="/icons/address.png"
                  alt=""
                  height="25px"
                  width="25px"
                />
                <i className="fa fa-print mr-3" /> Dhaka, Bangladesh
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="footer-copyright text-center py-3"
          style={{ backgroundColor: "black" }}
        >
          <MDBContainer className="text-light">
            &copy; {new Date().getFullYear()} Copyright:
            <b>www.MohaKhadok.com</b>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
