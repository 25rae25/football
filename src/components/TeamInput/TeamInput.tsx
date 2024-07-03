import { ChangeEvent } from "react";
import * as S from "./TeamInputStyles";

type Props = {
  title: string;
  type: string;
  id: string;
  name: string;
  placeholder: string;
  value: string | number | undefined;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function TeamInput({
  title,
  type,
  id,
  name,
  placeholder,
  value,
  handleInput,
}: Props) {
  return (
    <S.Write>
      <S.WritelTitle>{title}</S.WritelTitle>
      <S.WriteInput
        type={type}
        id={id}
        name={name}
        required
        autoFocus
        placeholder={placeholder}
        defaultValue={value}
        onChange={handleInput}
      />
    </S.Write>
  );
}
