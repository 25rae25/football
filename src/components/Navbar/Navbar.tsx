"use client";

import * as S from "./NavbarStyles";

export default function Navbar() {
  return (
    <S.NavbarWrapper>
      <S.Navbar>
        <S.Nav href="/">
          <S.Logo>SOCCERINFO</S.Logo>
        </S.Nav>
        <S.SearchWrapper>
          <S.SearchWrap>
            <S.SearchIcon className="search" />
            <S.Searchbar
              type="search"
              id="search"
              placeholder="지역, 팀 이름으로 찾기"
              maxLength={100}
            />
          </S.SearchWrap>
          <S.Nav href="/login">
            <S.UserIcon className="user" />
          </S.Nav>
        </S.SearchWrapper>
      </S.Navbar>
    </S.NavbarWrapper>
  );
}
