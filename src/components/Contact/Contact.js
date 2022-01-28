import React, { useState } from "react";
import "./contact.css";
import { FloatingLabel, Form, Row, Col } from "react-bootstrap";
import Axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState([]);
  const [message, setMessage] = useState([]);

  const Submit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:8000/api/conInfo/post", {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    }).then((done, err) => {
      if (done) {
        window.location.reload();
        alert("Success");
      } else {
        alert("failed");
        console.log(err);
      }
    });
  };

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
                    <Form.Control
                      type="text"
                      placeholder="Name:"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email:"
                    className="mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FloatingLabel controlId="floatingText" label="Phone:">
                    <Form.Control
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      type="text"
                      placeholder="Phone:"
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Subject:"
                    className="mb-3"
                  >
                    <Form.Control
                      onChange={(e) => {
                        setSubject(e.target.value);
                      }}
                      type="text"
                      placeholder="name@example.com"
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <FloatingLabel controlId="floatingTextarea2" label="Message:">
                <Form.Control
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  as="textarea"
                  placeholder="Message:"
                  style={{ height: "150px" }}
                />
              </FloatingLabel>
              <br />
              <button onClick={Submit} className="contact_btn">
                Submit
              </button>
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
