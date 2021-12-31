import React from "react";
import "./about.css";

import About_img from "../../assets/about.png";
import Platform from "../Platform/Platform";

function About() {
  return (
    <div className="about">
      <div className="about_box">
        <div className="about_box_one">
          <p style={{ color: "#de0562", fontWeight: "bold" }}>ABOUT US</p>
          <h1 style={{ fontWeight: "bold" }} className="about_box_one_h1">
            We are a Dynamic Team of <br /> Marketing Agency
          </h1>
          <br />
          <b className="about_box_one_b">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do <br />
            eiusmod tempor incididunt labore dolore magna aliqua.
          </b>
          <br />
          <br />
          <p className="about_box_one_p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="about_box_one_btn">More Details</div>
        </div>
        <div className="about_box_two">
          <img src={About_img} alt="" className="about_box_two_img" />
        </div>
      </div>
      <div className="Fretures">
        <Platform />
      </div>
    </div>
  );
}

export default About;
