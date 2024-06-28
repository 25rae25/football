import * as S from "./StartContentStyles";

export default function StartContent() {
  return (
    <S.StartContent>
      <S.StartContentSubTitle>
        SOCCERINFO만의 경기 규칙이 있나요?
      </S.StartContentSubTitle>
      경기의 승패보다는 즐거움을 추구합니다. 그렇기 때문에 풋살 규칙을 엄격하게
      따르지는 않습니다. 예를 들어 모든 파울은 사이드 플레이로, 백패스 허용 등이
      있습니다. 풋살 규칙을 잘 몰라도 전혀 어렵지 않아요.
      <S.StartContentSub>
        <br /> - 사람을 향한 슬라이딩 태클 금지
        <br /> - 골키퍼(골레이로)에게 백패스 가능
        <br /> - 모든 파울은 사이드에서 킥인으로 진행
        <br /> - 프리킥, 페널티킥 없음
      </S.StartContentSub>
    </S.StartContent>
  );
}
