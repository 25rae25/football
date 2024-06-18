"use client";

import * as S from "./MatchStyles";

export default function Match() {
  return (
    <S.Section>
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
      <S.SubmitWrapper>
        <S.SubmitWrap>
          <S.MatchTime>6월 18일 화요일 18:00</S.MatchTime>
          <S.MatchPlace>서울 교육대학교 운동장</S.MatchPlace>
          <S.SubmitBar>궁금중을 모두 해결하세요</S.SubmitBar>
          <S.SubmitButton>신청하기</S.SubmitButton>
        </S.SubmitWrap>
      </S.SubmitWrapper>
    </S.Section>
  );
}
