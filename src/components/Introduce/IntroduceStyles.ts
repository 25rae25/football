import styled from "@emotion/styled";
import Image from "next/image";

export const IntroduceWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const IntroduceWrap = styled.div``;

export const IntroduceImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const Introduce = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  border-bottom: 1px solid #ddd;
`;

export const IntroduceTitle = styled.div`
  font-size: 17px;
  /* font-weight: bold; */
`;

export const IntroduceContent = styled.div`
  color: #807b7b;
`;
