import styled from "@emotion/styled";
import Image from "next/image";
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

export const TeamWrapper = styled.ul`
  width: 100%;
  margin-top: 20px;
  display: flex;
`;

export const TeamWrap = styled.li`
  width: 24%;
  margin: 1%;
`;

export const Team = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const TeamImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const TeamTitle = styled.div`
  font-size: 14px;
  margin: 10px 0;
`;

export const TeamContent = styled.div`
  font-size: 16px;
  margin: 10px 0;
  font-weight: 600;
`;

export const TeamDate = styled.div`
  color: darkgray;
  opacity: 0.75;
`;
