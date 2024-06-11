"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const LoginWrapper = styled.div`
  height: 100%;
  max-width: 760px;
  margin: 0 auto;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 40px 20px;
`;

const LoginWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
`;

const LoginLabel = styled.label`
  color: #4b5a64;
  font-size: 14px;
  font-weight: 500;
`;

const LoginInput = styled.input`
  border: 1px solid #e6ecf1;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  padding: 0px 12px;
  font-size: 16px;
  box-sizing: border-box;
`;

const LoginButton = styled.button`
  color: #fff;
  background-color: #1570ff;
  border: none;
  width: 100%;
  text-align: center;
  height: 56px;
  padding: 0 20px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
`;

const FindForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

// const FindLink = styled.a`
//   font-size: 14px;
//   font-weight: 500;
//   color: #727f88;
//   text-align: center;
//   text-decoration: none;

//   &:hover {
//     color: #000;
//     font-weight: bold;
//   }
// `;

export default function LoginContainer() {
  return (
    <LoginWrapper>
      <LoginForm>
        <LoginWrap>
          <LoginLabel>이메일</LoginLabel>
          <LoginInput
            type="text"
            name="username"
            placeholder="이메일 주소를 입력하세요."
          />
        </LoginWrap>
        <LoginWrap>
          <LoginLabel>비밀번호</LoginLabel>
          <LoginInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
          />
        </LoginWrap>
        <LoginButton>로그인</LoginButton>
        <FindForm>
          <Link href="/">아이디/비밀번호 찾기</Link>
          <Link href="/">회원가입</Link>
        </FindForm>
      </LoginForm>
    </LoginWrapper>
  );
}
