"use client";

import Link from "next/link";
import styled from "@emotion/styled";
import { usePathname } from "next/navigation";

const NaviContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 14px 24px;
`;

const NaviWrapper = styled.div`
  display: flex;
`;

const NaviItem = styled.div`
  padding-right: 16px;
  font-size: 16px;
  line-height: 26px;
  margin: 0;
`;

const NewWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Newname = styled.span`
  background-color: #1570ff;
  color: #fff;
  font-size: 10px;
  padding: 0px 4px;
  border-radius: 13px;
  margin-left: 4px;
  height: 16px;
  line-height: 16px;
`;

export default function NavigateContainer() {
  const pathname = usePathname();
  return (
    <NaviContainer>
      <NaviWrapper>
        <NaviItem>
          <Link href="/">소셜 매치</Link>
        </NaviItem>
        <NaviItem>
          <NewWrap>
            <Link
              style={{ color: pathname === "/about" ? "red" : "blue" }}
              href="/about"
            >
              팀
            </Link>
            <Newname>NEW</Newname>
          </NewWrap>
        </NaviItem>
      </NaviWrapper>
    </NaviContainer>
  );
}
