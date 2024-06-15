import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

export const ExploreWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const ExploreWrap = styled.div`
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const ExploreItem = styled.div`
  padding: 5px;
  min-width: 60px;
`;

export const ExploreText = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;

export const Nav = styled(Link)``;
