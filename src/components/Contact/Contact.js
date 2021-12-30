import React from "react";
import "./contact.css";
import { FloatingLabel, Form, Row, Col } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact">
      <div className="contact_box">
        <div className="contact_box_left">
          <img
            src="/gallery/analysis.png"
            alt=""
            className="contact_box_img_one"
          />
        </div>
        <div className="contact_box_right">
          <p style={{ color: "#de0562", fontWeight: "bold" }}>ANALYSIS</p>
          <h1 style={{ fontWeight: "bold" }}>Get Free Marketing Analysis</h1>
          <br />

          <div className="contact_form">
            <>
              <Row>
                <Col>
                  <FloatingLabel controlId="floatingText" label="Name:">
                    <Form.Control type="text" placeholder="Name:" />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email:"
                    className="mb-3"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FloatingLabel controlId="floatingText" label="Phone:">
                    <Form.Control type="text" placeholder="Phone:" />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Subject:"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="name@example.com" />
                  </FloatingLabel>
                </Col>
              </Row>

              <FloatingLabel controlId="floatingTextarea2" label="Message:">
                <Form.Control
                  as="textarea"
                  placeholder="Message:"
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
              <br />
              <button className="contact_btn">Submit</button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
