"use client";

import * as S from "./ExploreStyles";

export default function Explore() {
  return (
    <S.ExploreWrapper>
      <S.ExploreWrap>
        <S.ExploreItem>
          <S.Nav href="/introduce">
            {/* 이미지 들어갈곳 */}
            {/* <Image
              src=""
              width={24}
              height={24}
              alt="메인사진"
            /> */}
            <S.ExploreText>팀소개</S.ExploreText>
          </S.Nav>
        </S.ExploreItem>
        <S.ExploreItem>
          <S.Nav href="/">
            {/* 이미지 들어갈곳 */}
            <S.ExploreText>팀홍보</S.ExploreText>
          </S.Nav>
        </S.ExploreItem>
        <S.ExploreItem>
          <S.Nav href="/">
            {/* 이미지 들어갈곳 */}
            <S.ExploreText>팀기록</S.ExploreText>
          </S.Nav>
        </S.ExploreItem>
        <S.ExploreItem>
          <S.Nav href="/">
            {/* 이미지 들어갈곳 */}
            <S.ExploreText>챌린지</S.ExploreText>
          </S.Nav>
        </S.ExploreItem>
        <S.ExploreItem>
          <S.Nav href="/start">
            {/* 이미지 들어갈곳 */}
            <S.ExploreText>시작하기</S.ExploreText>
          </S.Nav>
        </S.ExploreItem>
      </S.ExploreWrap>
    </S.ExploreWrapper>
  );
}
