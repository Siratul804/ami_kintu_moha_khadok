import React from "react";
import Gallery from "./MainP/Gallery";
import "./project.css";

function Project() {
  return (
    <div className="Project">
      <div className="Project_header">
        <h1 style={{ fontWeight: "bold" }} className="text-center">
          Our Project
        </h1>
        <div className="bar"></div>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="main_P">
        <Gallery />
      </div>
    </div>
  );
}

export default Project;
