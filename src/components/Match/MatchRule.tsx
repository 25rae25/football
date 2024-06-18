"use client";

import * as S from "./MatchRuleStyles";

export default function MatchRule() {
  return (
    <S.MatchRuleWrapper>
      <S.RuleHeader>매치 진행 방식</S.RuleHeader>
      <S.RuleWrap>
        <S.Rule>
          <S.RuleTitle>매치 규칙</S.RuleTitle>
          <S.RuleContent>모든 파울은 사이드라인에서 킥인</S.RuleContent>
          <S.RuleContent>
            골키퍼에게 백패스 가능 손으로는 잡으면 안 돼요
          </S.RuleContent>
          <S.RuleContent>사람을 향한 태클 금지</S.RuleContent>
        </S.Rule>
        <S.Rule>
          <S.RuleTitle>진행 방식</S.RuleTitle>
          <S.RuleContent>풋살화와 개인 음료만 준비하세요</S.RuleContent>
          <S.RuleContent>
            골키퍼와 휴식을 공평하게 돌아가면서 해요
          </S.RuleContent>
          <S.RuleContent>레벨 데이터를 기준으로 팀을 나눠요</S.RuleContent>
          <S.RuleContent>
            친구끼리 와도 팀 실력이 맞지 않으면 다른 팀이 될 수 있어요
          </S.RuleContent>
        </S.Rule>
        <S.Rule>
          <S.RuleTitle>알아두면 좋아요</S.RuleTitle>
          <S.RuleContent>서로 존중하고 격려하며 함께 즐겨요</S.RuleContent>
          <S.RuleContent>하루 평균 30매치가 진행되고 있어요</S.RuleContent>
        </S.Rule>
      </S.RuleWrap>
    </S.MatchRuleWrapper>
  );
}
