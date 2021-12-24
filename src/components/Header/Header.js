import React from "react";
import "./header.css";
import Banner from "../../assets/banner-1.png";
import Shape from "../../assets/shape-1.png";

function Header() {
  return (
    <div className="header">
      <div className="heder_box py-4 ">
        <div className="header_box_one py-4 ">
          <div className="shape_box_one">
            <img src={Shape} alt="" className="shape_img" />
          </div>
          <h1 className="heder_box_one_h1">
            Marketing Agency with <br /> Excellence Service
          </h1>{" "}
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <div className="about_us_btn">More About us </div>
        </div>
        <div className="header_box_two py-4">
          <img src={Banner} alt="" className="banner_img" />
        </div>
      </div>
      <div className="heder_box_fre">
        <div className="single_fre text-center  ">
          <img src="/icons/ana.png" alt="" height="55px" width="55px" /> <br />
          <br />
          <b style={{ fontSize: "22px" }}>Competitor Analysis</b>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit sed do
            <br />
            eiusmod tempor
          </p>
        </div>
        <div className="single_fre text-center ">
          <img src="/icons/mark.png" alt="" height="55px" width="55px" /> <br />
          <br />
          <b style={{ fontSize: "22px" }}>Social Marketing</b>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit sed do
            <br />
            eiusmod tempor
          </p>
        </div>
        <div className="single_fre text-center ">
          <img src="/icons/grow.png" alt="" height="55px" width="55px" /> <br />
          <br />
          <b style={{ fontSize: "22px" }}>Skyrocketing Growth</b>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit sed do
            <br />
            eiusmod tempor
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
