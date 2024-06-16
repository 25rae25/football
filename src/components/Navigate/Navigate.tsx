"use client";

import * as S from "./NavigateStyles";
import { usePathname } from "next/navigation";

export default function Navigate() {
  const pathname = usePathname();
  return (
    <S.NaviContainer>
      <S.NaviWrapper>
        <S.NaviItem>
          <S.Nav href="/">소셜 매치</S.Nav>
        </S.NaviItem>
        <S.NaviItem>
          <S.NewWrap>
            <S.Nav
              style={{ color: pathname === "/about" ? "red" : "blue" }}
              href="/about"
            >
              팀
            </S.Nav>
            <S.Newname>NEW</S.Newname>
          </S.NewWrap>
        </S.NaviItem>
        <S.NaviItem>
          <S.Nav href="/reserve">구장 예약</S.Nav>
        </S.NaviItem>
      </S.NaviWrapper>
    </S.NaviContainer>
  );
}
