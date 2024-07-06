import * as S from "./JoinStyles";

type Props = {
  handleModal: () => void;
};

export default function Join({ handleModal }: Props) {
  return (
    <S.JoinWrapper>
      <S.CloseButton onClick={handleModal}>X</S.CloseButton>
    </S.JoinWrapper>
  );
}
