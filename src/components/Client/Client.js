import React from "react";
import "./client.css";
import Companies from "./Companies/Companies";

function Client() {
  return (
    <div className="client">
      <div className="Client_header">
        <h1 style={{ fontWeight: "bold" }} className="text-center">
          What Our Client Say
        </h1>
        <div className="bar"></div>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="client_box">
        <div className="client_box_test">
          <img src="/gallery/1.jpg" alt="" className="client_box_test_img" />
          <br />
          <br />

          <b className="client_box_test_b">STELLA LARSON</b>
          <br />
          <br />
          <p className="client_box_test_p">
            Sample text. Click to select the text box
            <br /> Click again or double click to start <br /> editing the text.
          </p>
        </div>
        <div className="client_box_test">
          <img src="/gallery/4.jpg" alt="" className="client_box_test_img" />
          <br />
          <br />

          <b className="client_box_test_b">STELLA LARSON</b>
          <br />
          <br />
          <p className="client_box_test_p">
            Sample text. Click to select the text box
            <br /> Click again or double click to start <br /> editing the text.
          </p>
        </div>
        <div className="client_box_test">
          <img src="/gallery/5.jpg" alt="" className="client_box_test_img" />
          <br />
          <br />

          <b className="client_box_test_b">STELLA LARSON</b>
          <br />
          <br />
          <p className="client_box_test_p">
            Sample text. Click to select the text box
            <br /> Click again or double click to start <br /> editing the text.
          </p>
        </div>
      </div>
      <div className="companies">
        <Companies />
      </div>
    </div>
  );
}

export default Client;
