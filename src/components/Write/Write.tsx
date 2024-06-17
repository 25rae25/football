"use client";

import * as S from "./WriteStyles";

export default function WriteWrap() {
  return (
    <S.WriteWrap>
      <S.Write>
        <S.WritelTitle>팀명</S.WritelTitle>
        <S.WriteInput placeholder="팀명" />
      </S.Write>
      <S.Write>
        <S.WritelTitle>주요 활동지역</S.WritelTitle>
        <S.WriteInput placeholder="주요 활동지역" />
      </S.Write>
    </S.WriteWrap>
  );
}
