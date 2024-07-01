import * as S from "./ExploreStyles";

type Props = {
  token: string | null;
};

export default function Explore({ token }: Props) {
  return (
    <S.ExploreWrapper>
      <S.ExploreWrap>
        <S.ExploreItem>
          <S.Nav href="/introduce">
            <S.UsersIcon />
            <S.ExploreText>팀소개</S.ExploreText>
          </S.Nav>
        </S.ExploreItem>
        <S.ExploreItem>
          {token ? (
            <S.Nav href="/write">
              <S.UserPlusIcon />
              <S.ExploreText>팀홍보</S.ExploreText>
            </S.Nav>
          ) : (
            <S.Nav href="/login">
              <S.UserPlusIcon />
              <S.ExploreText>팀홍보</S.ExploreText>
            </S.Nav>
          )}
        </S.ExploreItem>
        <S.ExploreItem>
          <S.Nav href="/">
            <S.MemoIcon />
            <S.ExploreText>팀기록</S.ExploreText>
          </S.Nav>
        </S.ExploreItem>
        <S.ExploreItem>
          <S.Nav href="/">
            <S.FireIcon />
            <S.ExploreText>챌린지</S.ExploreText>
          </S.Nav>
        </S.ExploreItem>
        <S.ExploreItem>
          <S.Nav href="/start">
            <S.HeartIcon />
            <S.ExploreText>시작하기</S.ExploreText>
          </S.Nav>
        </S.ExploreItem>
      </S.ExploreWrap>
    </S.ExploreWrapper>
  );
}
