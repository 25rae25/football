"use client";

import styled from "@emotion/styled";
import CarouselSlider from "./CarouselSlider";

const CarouselWrapper = styled.div`
  background-color: #f2f5f7;
  border-bottom: #f2f5f7;
  margin: 0 auto;
`;

const CarouselWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
`;

export default function CarouselContainer() {
  return (
    <CarouselWrapper>
      <CarouselWrap>
        <CarouselSlider />
      </CarouselWrap>
    </CarouselWrapper>
  );
}
