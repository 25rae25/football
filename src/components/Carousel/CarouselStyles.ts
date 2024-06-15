import styled from "@emotion/styled";
import Image from "next/image";
import { IoAdd } from "react-icons/io5";

export const CarouselWrapper = styled.div`
  background-color: #f2f5f7;
  border-bottom: #f2f5f7;
  margin: 0 auto;
  padding: 20px 0;
`;

export const CarouselWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;

  .slick-list {
    border-radius: 20px;
  }
`;

export const Box = styled.div`
  position: absolute;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  align-items: center;
  bottom: 20px;
  right: 60px;

  > p {
    color: #fff;
    font-size: 12px;
  }
`;

export const Icon = styled(IoAdd)`
  color: #fff;
  margin-left: 10px;
`;

export const CarouselImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
