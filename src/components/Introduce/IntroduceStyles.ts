import styled from "@emotion/styled";
import Link from "next/link";

export const IntroduceWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 1rem;
`;

export const IntroduceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const IntroduceTitle = styled.h2`
  font-weight: 700;
`;

export const IntroduceEnroll = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  padding: 14px;
  border-radius: 22px;
  text-decoration: none;
  color: #fff;
  background-color: #1570ff;
  border: none;
  text-align: center;
  :hover {
    background-color: #0f56c6;
  }
`;
