import Link from "next/link";
import styled from "@emotion/styled";

export const NaviContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 14px 24px;
`;

export const NaviWrapper = styled.div`
  display: flex;
`;

export const NaviItem = styled.div`
  padding-right: 16px;
  font-size: 16px;
  line-height: 26px;
  margin: 0;
`;

export const NewWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Newname = styled.span`
  background-color: #1570ff;
  color: #fff;
  font-size: 10px;
  padding: 0px 4px;
  border-radius: 13px;
  margin-left: 4px;
  height: 16px;
  line-height: 16px;
`;

export const Nav = styled(Link)``;
