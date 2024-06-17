"use client";

import * as S from "./IntroduceStyles";

export default function Introduce() {
  return (
    <S.IntroduceWrapper>
      <S.IntroduceWrap>
        <S.Introduce>
          <S.IntroduceTitle>팀명</S.IntroduceTitle>
          <S.IntroduceContent>FC 서초</S.IntroduceContent>
        </S.Introduce>
        <S.Introduce>
          <S.IntroduceTitle>주요 활동지역</S.IntroduceTitle>
          <S.IntroduceContent>서울특별시 동작구</S.IntroduceContent>
        </S.Introduce>
      </S.IntroduceWrap>
    </S.IntroduceWrapper>
  );
}
