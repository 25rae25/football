"use client";

import { Gamedata } from "@/common/types/CommonTypes";
import MatchRule from "./MatchRule";
import * as S from "./MatchStyles";

export default function Match({ gameData }: Gamedata) {
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
            <S.IconTitle>{gameData.people}</S.IconTitle>
          </S.MatchWrap>
          <S.MatchWrap>
            <S.ShoesIcon />
            <S.IconTitle>{gameData.shoes}</S.IconTitle>
          </S.MatchWrap>
        </S.MatchWrapper>
        <MatchRule />
      </S.MatchContainer>
      <S.SubmitWrapper>
        <S.SubmitWrap>
          <S.MatchTime>{gameData.time}</S.MatchTime>
          <S.MatchPlace>{gameData.address}</S.MatchPlace>
          <div>{gameData.stadium}</div>
          <S.SubmitBar>궁금중을 모두 해결하세요</S.SubmitBar>
          <S.SubmitButton>신청하기</S.SubmitButton>
        </S.SubmitWrap>
      </S.SubmitWrapper>
    </S.Section>
  );
}
