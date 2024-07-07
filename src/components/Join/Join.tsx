import * as S from "./JoinStyles";

type Props = {
  handleModal: () => void;
  handleSubmit: () => void;
};

export default function Join({ handleModal, handleSubmit }: Props) {
  return (
    <S.JoinWrapper>
      <S.JoinWrap>
        <S.JoinTitle>게임 예약을 신청하시겠습니까?</S.JoinTitle>
        <S.SubmitButton onClick={handleSubmit}>신청하기</S.SubmitButton>
        <S.CloseButton onClick={handleModal}>X</S.CloseButton>
      </S.JoinWrap>
    </S.JoinWrapper>
  );
}
