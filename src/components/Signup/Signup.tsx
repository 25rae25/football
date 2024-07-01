import { ChangeEvent, FormEvent } from "react";
import Input from "../Input/Input";
import * as S from "./SignupStyles";

type Props = {
  isEmail: boolean;
  isName: boolean;
  isPassword: boolean;
  isPasswordConfirm: boolean;
  emailMessage: string;
  nameMessage: string;
  passwordMessage: string;
  passwordConfirmMessage: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function Signup({
  isEmail,
  isName,
  isPassword,
  isPasswordConfirm,
  emailMessage,
  nameMessage,
  passwordMessage,
  passwordConfirmMessage,
  handleInput,
  handleSubmit,
}: Props) {
  return (
    <S.SignWrap>
      <S.SignTitle>
        스포츠가 주는
        <br /> 다양한 감정을 즐기며 살아가도록
      </S.SignTitle>
      <S.SignForm onSubmit={handleSubmit}>
        <Input
          title="이메일"
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력해 주세요"
          errorMessage={emailMessage}
          handleInput={handleInput}
        />
        <Input
          title="이름"
          type="name"
          id="name"
          name="name"
          placeholder="이름을 입력해 주세요"
          errorMessage={nameMessage}
          handleInput={handleInput}
        />
        <Input
          title="비밀번호"
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력해 주세요"
          errorMessage={passwordMessage}
          handleInput={handleInput}
        />
        <Input
          title="비밀번호 확인"
          type="password"
          id="password"
          name="passwordConfirm"
          placeholder="비밀번호를 확인해 주세요."
          errorMessage={passwordConfirmMessage}
          handleInput={handleInput}
        />
        <S.ButtonWrap>
          <S.Button
            disabled={!isEmail || !isName || !isPassword || !isPasswordConfirm}
          >
            가입하기
          </S.Button>
        </S.ButtonWrap>
      </S.SignForm>
    </S.SignWrap>
  );
}
