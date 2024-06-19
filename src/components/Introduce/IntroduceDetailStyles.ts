import styled from "@emotion/styled";
import Image from "next/image";

export const IntroduceDetailWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const IntroduceDetailWrap = styled.div``;

export const TeamImage = styled(Image)`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  display: block;
`;

export const IntroduceDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  border-bottom: 1px solid #ddd;
`;

export const IntroduceDetailTitle = styled.div`
  font-size: 17px;
  /* font-weight: bold; */
`;

export const IntroduceDetailContent = styled.div`
  color: #807b7b;
`;
