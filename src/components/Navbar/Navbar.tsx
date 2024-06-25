"use client";

import * as S from "./NavbarStyles";

type Props = {
  token: string | null;
  handleLogout: () => void;
};

export default function Navbar({ token, handleLogout }: Props) {
  return (
    <S.NavbarWrapper>
      <S.Navbar>
        <S.Nav href="/">
          <S.Logo>SOCCERINFO</S.Logo>
        </S.Nav>
        <S.SearchWrapper>
          <S.SearchWrap>
            <S.SearchIcon />
            <S.Searchbar
              type="search"
              id="search"
              placeholder="지역, 팀 이름으로 찾기"
              maxLength={100}
            />
          </S.SearchWrap>
          <S.Nav href="/login">
            {/* {token ? <S.UserIcon onClick={handleLogout} /> : <S.LoginIcon />} */}
            <S.UserIcon />
            {token && <S.LogoutIcon onClick={handleLogout} />}
          </S.Nav>
        </S.SearchWrapper>
      </S.Navbar>
    </S.NavbarWrapper>
  );
}
