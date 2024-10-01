import * as S from "./NavbarStyles";

type Props = {
  token: string | null;
  handleLogout: () => void;
  handleChnage: (e) => void;
};

export default function Navbar({ token, handleLogout, handleChnage }: Props) {
  return (
    <S.NavbarWrapper>
      <S.Navbar>
        <S.Nav href="/">
          <S.Logo>SOCCERINFO</S.Logo>
        </S.Nav>
        <S.SearchWrapper>
          <S.SearchWrap>
            <S.SearchIcon />
            {/* onClick={onSearch}  */}
            <S.Searchbar
              type="search"
              id="search"
              placeholder="지역, 팀 이름으로 찾기"
              maxLength={100}
              onChange={handleChnage}
              // onKeyDown={handleKeyDown}
            />
          </S.SearchWrap>
          <S.Nav href="/login">
            {/* {token ? <S.UserIcon onClick={handleLogout} /> : <S.LoginIcon />} */}
            <S.UserIcon />
            {token && (
              <>
                {/* link태그안에 a태그 또 있어서 생긴 에러 */}
                {/* <Link href="/mypage">
                  <S.CalenderIcon />
                </Link> */}
                <S.LogoutIcon onClick={handleLogout} />
              </>
            )}
          </S.Nav>
        </S.SearchWrapper>
      </S.Navbar>
    </S.NavbarWrapper>
  );
}
