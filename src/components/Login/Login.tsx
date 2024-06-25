"use client";

import { FormEvent } from "react";
import * as S from "./LoginStyles";

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function Login({ handleSubmit }: Props) {
  return (
    <S.LoginWrapper>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.LoginWrap>
          <S.LoginLabel>이메일</S.LoginLabel>
          <S.LoginInput
            type="text"
            name="username"
            placeholder="이메일 주소를 입력하세요."
          />
        </S.LoginWrap>
        <S.LoginWrap>
          <S.LoginLabel>비밀번호</S.LoginLabel>
          <S.LoginInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
          />
        </S.LoginWrap>
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginForm>
      <S.FindForm>
        <S.Nav href="/">아이디/비밀번호 찾기</S.Nav>
        <S.Nav href="/signup">회원가입</S.Nav>
      </S.FindForm>
    </S.LoginWrapper>
  );
}
