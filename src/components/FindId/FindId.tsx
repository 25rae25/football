import * as S from "./FindIdStyles";

type Props = {
  handleCloseModal: () => void;
  handleEmailSubmit: () => void;
};

export default function FindId({ handleCloseModal, handleEmailSubmit }: Props) {
  return (
    <S.FindWrapper>
      <S.FindWrap>
        <S.FindInput type="text" placeholder="이메일을 입력하세요" />
        <S.CloseButton onClick={handleCloseModal}>X</S.CloseButton>
        <S.SubmitButton onClick={handleEmailSubmit}>확인</S.SubmitButton>
      </S.FindWrap>
    </S.FindWrapper>
  );
}
