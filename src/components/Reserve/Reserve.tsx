"use client";

import * as S from "./ReserveStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reserve() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const banner = [
    "https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/ydp_sky_A_goal.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIveWRwX3NreV9BX2dvYWwuanBlZyIsImlhdCI6MTcxODU5OTY5OCwiZXhwIjoxNzUwMTM1Njk4fQ.wIN6B_fHBKvMA2BV1hbWY9R2Lrb-2wmCuwKvelQkCsE&t=2024-06-17T04%3A48%3A18.164Z",
    "https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/ydp_sky_A_coner.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIveWRwX3NreV9BX2NvbmVyLmpwZWciLCJpYXQiOjE3MTg1OTk5MjQsImV4cCI6MTc1MDEzNTkyNH0.tBjpS20ebfMg47-irq-qGaEbIiONT7Lw_SR3r90tFJw&t=2024-06-17T04%3A52%3A04.149Z",
  ];

  return (
    <S.ReserveWrapper>
      <S.ReserveWrap>
        <Slider {...settings}>
          {banner.map((item, i) => (
            <S.ReserveImage
              key={item}
              src={item}
              width={1024}
              height={200}
              alt="메인사진"
            />
          ))}
        </Slider>
        <div>
          <div>6vs6 3파전</div>
          <div>10~15명</div>
          <div>풋살화/운동화</div>
        </div>
      </S.ReserveWrap>
    </S.ReserveWrapper>
  );
}
