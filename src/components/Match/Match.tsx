"use client";

import * as S from "./MatchStyles";

export default function Match() {
  return (
    <S.MatchContainer>
      <S.MatchTitle>매치 포인트</S.MatchTitle>
      <S.MatchWrapper>
        <S.MatchWrap>
          <S.FieldIcon />
          <S.IconTitle>6vs6 3파전</S.IconTitle>
        </S.MatchWrap>
        <S.MatchWrap>
          <S.UserIcon />
          <S.IconTitle>10~15명</S.IconTitle>
        </S.MatchWrap>
        <S.MatchWrap>
          <S.ShoesIcon />
          <S.IconTitle>풋살화/운동화</S.IconTitle>
        </S.MatchWrap>
      </S.MatchWrapper>
    </S.MatchContainer>
  );
}
