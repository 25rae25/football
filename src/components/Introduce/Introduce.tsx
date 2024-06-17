"use client";

import * as S from "./IntroduceStyles";

export default function Introduce() {
  return (
    <S.IntroduceWrapper>
      <S.IntroduceWrap>
        <S.IntroduceTitle>팀소개</S.IntroduceTitle>
        <S.IntroduceEnroll href="/aaa">팀소개글 작성</S.IntroduceEnroll>
      </S.IntroduceWrap>
    </S.IntroduceWrapper>
  );
}
