import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlider() {
  const settings = {
    // 슬라이더 설정
  };

  return <Slider {...settings}>{/* 슬라이더에 들어갈 이미지 */}</Slider>;
}
