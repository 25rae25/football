import * as S from "./JoinStyles";

type Props = {
  handleModal: () => void;
};

export default function Join({ handleModal }: Props) {
  return (
    <S.JoinWrapper>
      <S.JoinWrap>
        <S.SubmitButton>신청하기</S.SubmitButton>
        <S.CloseButton onClick={handleModal}>X</S.CloseButton>
      </S.JoinWrap>
    </S.JoinWrapper>
  );
}
