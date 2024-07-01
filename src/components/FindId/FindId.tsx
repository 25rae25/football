import * as S from "./FindIdStyles";

type Props = {
  handleModal: () => void;
};

export default function FindId({ handleModal }: Props) {
  return (
    <S.FindWrapper>
      <S.FindWrap>
        <S.FindInput type="text" placeholder="이메일을 입력하세요" />
        <S.CloseButton onClick={handleModal}>X</S.CloseButton>
        <S.SubmitButton>확인</S.SubmitButton>
      </S.FindWrap>
    </S.FindWrapper>
  );
}
