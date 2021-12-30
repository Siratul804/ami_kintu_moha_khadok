// modules
import React from "react";
import Slider from "react-slick";

// css
import "./Companies.css";

function SwipeToSlide({ companies }) {
  const settings = {
    className: "center",
    autoplay: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {companies.map((img, idx) => (
        <div key={idx} className="campanies__slider">
          <img src={img} alt="company name" />
        </div>
      ))}
    </Slider>
  );
}

function Companies() {
  const testData = [
    "/companies/1.png",
    "/companies/2.png",
    "/companies/3.png",
    "/companies/4.png",
    "/companies/5.png",
    "/companies/6.png",
    "/companies/7.png",
  ];
  return (
    <div className="companies">
      <div className="container">
        <div className="companies__title"></div>

        <SwipeToSlide companies={testData} />
      </div>
    </div>
  );
}

export default Companies;
