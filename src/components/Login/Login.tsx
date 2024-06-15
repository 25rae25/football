"use client";

import * as S from "./LoginStyles";

export default function LoginContainer() {
  return (
    <S.LoginWrapper>
      <S.LoginForm>
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
        <S.FindForm>
          {/* <Link href="/">아이디/비밀번호 찾기</Link>
          <Link href="/signup">회원가입</Link> */}
        </S.FindForm>
      </S.LoginForm>
    </S.LoginWrapper>
  );
}
