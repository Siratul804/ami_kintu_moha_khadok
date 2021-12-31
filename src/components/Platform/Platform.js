import React from "react";
import "./platform.css";
import Free from "../../assets/Features.png";

function Platform() {
  return (
    <div className="platform">
      <div className="platform_header">
        <h1 style={{ fontWeight: "bold" }} className="text-center">
          Powerful Platform That Enhances Business
        </h1>
        <div className="bar"></div>
        <p className="text-center platform_header_p ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="platform_bdy">
        <div className="paltform_bdy_box_1">
          <div className="paltform_bdy_1">
            <img
              src="/icons/advertising.png"
              alt=""
              width="40px"
              height="40px"
            />
            Online Marketing
          </div>
          <div className="paltform_bdy_1">
            <img
              src="/icons/advertising.png"
              alt=""
              width="40px"
              height="40px"
            />
            Online Marketing
          </div>
          <div className="paltform_bdy_1">
            <img
              src="/icons/advertising.png"
              alt=""
              width="40px"
              height="40px"
            />
            Online Marketing
          </div>
          <div className="paltform_bdy_1">
            <img
              src="/icons/advertising.png"
              alt=""
              width="40px"
              height="40px"
            />
            Online Marketing
          </div>
        </div>
        <div className="paltform_bdy_2">
          <img src={Free} alt="" className="paltform_bdy_2_img" />
        </div>
        <div className="paltform_bdy_box_3">
          <div className="paltform_bdy_3">
            <img src="/icons/api.png" alt="" width="40px" height="40px" />
            Tracking API
          </div>
          <div className="paltform_bdy_3">
            <img src="/icons/api.png" alt="" width="40px" height="40px" />
            Tracking API
          </div>
          <div className="paltform_bdy_3">
            <img src="/icons/api.png" alt="" width="40px" height="40px" />
            Tracking API
          </div>
          <div className="paltform_bdy_3">
            <img src="/icons/api.png" alt="" width="40px" height="40px" />
            Tracking API
          </div>
        </div>
      </div>
    </div>
  );
}

export default Platform;
