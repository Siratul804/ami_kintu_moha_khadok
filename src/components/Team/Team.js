import React from "react";
import "./team.css";

function Team() {
  return (
    <div className="team">
      <div className="Team_header">
        <h1 style={{ fontWeight: "bold" }} className="text-center">
          Meet Our Team
        </h1>
        <div className="bar"></div>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="Team_bdy">
        <div className="team_body_Circle">
          <img className="team_body_Circle_img" alt="" src="/icons/Pro.jpg" />{" "}
          <br />
          <div className="team_body_Circle_text text-center ">
            <b style={{ fontSize: "20px" }}>Uzan Ahmed</b> <br />
            <p style={{ color: "#de0562", fontSize: "15px" }}>CEO & Founder</p>
          </div>
        </div>
        <div className="team_body_Circle">
          <img className="team_body_Circle_img" alt="" src="/icons/Pro.jpg" />{" "}
          <br />
          <div className="team_body_Circle_text text-center ">
            <b style={{ fontSize: "20px" }}>Uzan Ahmed</b> <br />
            <p style={{ color: "#de0562", fontSize: "15px" }}>CEO & Founder</p>
          </div>
        </div>
        <div className="team_body_Circle">
          <img className="team_body_Circle_img" alt="" src="/icons/Pro.jpg" />{" "}
          <br />
          <div className="team_body_Circle_text text-center ">
            <b style={{ fontSize: "20px" }}>Uzan Ahmed</b> <br />
            <p style={{ color: "#de0562", fontSize: "15px" }}>CEO & Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
