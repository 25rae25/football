import styled from "@emotion/styled";
import Image from "next/image";

export const ReserveWrapper = styled.div`
  background-color: #f2f5f7;
  border-bottom: #f2f5f7;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const ReserveWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  .slick-list {
    width: 100%;
  }
`;

export const ReserveImage = styled(Image)`
  width: 100%;
  height: 448px;
`;
