import * as S from "./StartContentStyles";

export default function StartContent() {
  return (
    <>
      <S.StartContent>
        <S.StartContentSubTitle>
          SOCCERINFO만의 경기 규칙이 있나요?
        </S.StartContentSubTitle>
        경기의 승패보다는 즐거움을 추구합니다. 그렇기 때문에 풋살 규칙을
        엄격하게 따르지는 않습니다. 예를 들어 모든 파울은 사이드 플레이로,
        백패스 허용 등이 있습니다. 풋살 규칙을 잘 몰라도 전혀 어렵지 않아요.
        <S.StartContentSub>
          <br /> - 사람을 향한 슬라이딩 태클 금지
          <br /> - 골키퍼(골레이로)에게 백패스 가능
          <br /> - 모든 파울은 사이드에서 킥인으로 진행
          <br /> - 프리킥, 페널티킥 없음
        </S.StartContentSub>
      </S.StartContent>
      <S.StartContent>
        <S.StartContentSubTitle>
          풋살화와 개인 음료만 준비하세요
        </S.StartContentSubTitle>
        <S.StartContentSub>
          풋살화(운동화)와 개인 음료만 준비하세요.<br></br>
          <br></br> 모든 진행과 공, 조끼 등의 . 만약 풋살화가 없다면 굽이 낮은
          운동화를 신어도 괜찮아요. 하지만 운동화는 조금 미끄러워서 넘어질
          위험이 있어요. 그리고 풋살장에서 축구화는 착용할 수 없어요. 플래버들의
          부상 방지하고 경기장 보호하기 위함이에요. 실수로 축구화를 지참해도
          참여할 수 없기 때문에 꼭 풋살화를 준비해 주세요!
        </S.StartContentSub>
      </S.StartContent>
    </>
  );
}
