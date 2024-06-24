"use client";

import React, { useState } from "react";
import * as S from "./CarouselStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    afterChange: (currentSlide: number) => {
      setCurrentSlide(currentSlide);
    },
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const banner = [
    "https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/banner06.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvYmFubmVyMDYucG5nIiwiaWF0IjoxNzE5MjI1NjM1LCJleHAiOjE3NTA3NjE2MzV9.DE0j1OWo1kRRM1Z6iPCj3XxvIHimKJusBP2okq76hd4&t=2024-06-24T10%3A40%3A35.759Z",
    "https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/banner05.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvYmFubmVyMDUucG5nIiwiaWF0IjoxNzE5MjI1NDgzLCJleHAiOjE3NTA3NjE0ODN9.lAJN14Pq_SUMT4KLKk0ViGfLNxFfJZIgzl818zqbsew&t=2024-06-24T10%3A38%3A03.800Z",
    "https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/banner04.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvYmFubmVyMDQucG5nIiwiaWF0IjoxNzE4MDg3NTc2LCJleHAiOjE3NDk2MjM1NzZ9.vprjqiaD6wqLurxCdrlbVRgfUrNRAKZo_OPJglypmcY&t=2024-06-11T06%3A32%3A57.040Z",
  ];

  return (
    <S.CarouselWrapper>
      <S.CarouselWrap>
        <Slider {...settings}>
          {banner.map((item, i) => (
            <S.CarouselImage
              key={item}
              src={item}
              width={1024}
              height={346}
              alt="메인사진"
            />
          ))}
        </Slider>
        <S.Box>
          <p>{`${currentSlide + 1} / ${banner.length}`}</p>
          <S.Icon />
        </S.Box>
      </S.CarouselWrap>
    </S.CarouselWrapper>
  );
}
