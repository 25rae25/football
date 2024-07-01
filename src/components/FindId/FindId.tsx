import * as S from "./FindIdStyles";

export default function FindId() {
  return (
    <S.FindWrapper>
      <S.FindWrap>
        <S.FindInput type="text" placeholder="이메일을 입력하세요" />
        <S.CloseButton>X</S.CloseButton>
        <S.SubmitButton type="submit">확인</S.SubmitButton>
      </S.FindWrap>
    </S.FindWrapper>
  );
}
