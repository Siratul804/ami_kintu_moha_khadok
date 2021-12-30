import React from "react";
import ReactPlayer from "react-player";
import "./video.css";

function Video() {
  let YouVideos = [
    {
      url: "https://youtu.be/dRyAFqOTAtE",
      title:
        "The 69 Hotel & resturent রুফটপ রেস্টুরেন্ট এই প্রথমবার এত রাতে সুইমিং পুলে বসে রাতের ডিনার করলাম!",
    },
    {
      url: "https://youtu.be/nH3smx7RCTc",
      title: "The Great eatary buffet uttara",
    },
    {
      url: "https://youtu.be/FwBUqEebfy4",
      title: "Roadside kitchen Mohammadpur challenge jite galam",
    },
    {
      url: "https://youtu.be/PNN58HDo3-w",
      title: "Rafsan vai er sathe Habiby's e Challenges nilam",
    },
  ];

  return (
    <div className="video">
      <div className="video_header">
        <h1 style={{ fontWeight: "bold" }} className="text-center">
          Our Videos
        </h1>
        <div className="bar"></div>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="video_box">
        {YouVideos.map((data, idx) => {
          return (
            <div key={idx} className="video_box_video">
              <ReactPlayer
                url={data.url}
                style={{ padding: "2%" }}
                controls={true}
              />
              <p className="video_box_p">{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Video;
