import React from "react";
import "./why.css";
import why from "../../assets/choose.png";

function Why() {
  return (
    <div className="why py-4 ">
      <div className="why_box">
        <div className="why_box_one">
          <p style={{ color: "#de0562", fontWeight: "bold" }}>WHY CHOOSE US</p>
          <h1 className="why_h1">
            Outstanding Digital <br /> Experience
          </h1>
          <br />
          <p className="why_p_detail">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. <br /> Risus commodo
            viverra maecenas accumsan lacus vel facilisis.
          </p>

          <div className="why_li">
            <div>
              <img alt="" src="/icons/check.png" className="why_correct" />
            </div>
            <div style={{ marginLeft: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="why_li">
            <div>
              <img alt="" src="/icons/check.png" className="why_correct" />
            </div>
            <div style={{ marginLeft: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
          <div className="why_li">
            <div>
              <img alt="" src="/icons/check.png" className="why_correct" />
            </div>
            <div style={{ marginLeft: "10px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <div className="why_box_two">
          <img src={why} alt="" className="why_img" />
        </div>
      </div>
    </div>
  );
}

export default Why;
