import React from "react";
import "./services.css";

function Services() {
  return (
    <div className="services ">
      <div className="service_header">
        <h1 style={{ fontWeight: "bold" }}>Our Amazing Services</h1>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="services_box ">
        <div className="single_box_services  ">
          <img
            src="/service/social.png"
            alt=""
            className="single_box_services_icon"
          />
          <br />
          <br />
          <h4 style={{ fontWeight: "bold" }}>Social Media Strategy</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing <br /> elit sed do
            eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
          </p>
        </div>
        <div className="single_box_services  ">
          <img
            src="/service/content.png"
            alt=""
            className="single_box_services_icon"
          />
          <br />
          <br />
          <h4 style={{ fontWeight: "bold" }}>Online Media Management</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing <br /> elit sed do
            eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
          </p>
        </div>
        <div className="single_box_services  ">
          <img
            src="/service/report.png"
            alt=""
            className="single_box_services_icon"
          />
          <br />
          <br />
          <h4 style={{ fontWeight: "bold" }}>Reporting & Analysis</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing <br /> elit sed do
            eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
