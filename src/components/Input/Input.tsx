import { ChangeEvent } from "react";
import * as S from "./InputStyles";

type Props = {
  title: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  errorMessage: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  title,
  type,
  id,
  name,
  placeholder,
  errorMessage,
  handleInput,
}: Props) {
  return (
    <S.LabelWrap>
      <S.LabelTitle>{title}</S.LabelTitle>
      <S.LabelInput
        type={type}
        id={id}
        name={name}
        required
        autoFocus
        placeholder={placeholder}
        onChange={handleInput}
      />
      <S.ErrorText>{errorMessage}</S.ErrorText>
    </S.LabelWrap>
  );
}
