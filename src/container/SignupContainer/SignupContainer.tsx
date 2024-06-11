"use client";

import styled from "@emotion/styled";

const SignWrap = styled.div`
  max-width: 760px;
  margin: 0 auto;
`;

const SignForm = styled.form`
  padding: 20px;
`;

const LabelWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  margin-top: 15px;
`;

const LabelTitle = styled.label`
  color: #4b5a64;
  font-size: 14px;
  font-weight: 500;
`;

const LabelInput = styled.input`
  border: 1px solid #e6ecf1;
  background-color: #f8fafb;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #1570ff;
  padding: 0 20px;
  height: 56px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  color: #fff;
`;

export default function SignupContainer() {
  return (
    <SignWrap>
      <SignForm>
        <LabelWrap>
          <LabelTitle htmlFor="email">이메일</LabelTitle>
          <LabelInput
            type="email"
            id="email"
            name="email"
            required
            autoFocus
            placeholder="아이디를 입력하세요"
          />
        </LabelWrap>
        <LabelWrap>
          <LabelTitle htmlFor="password">비밀번호</LabelTitle>
          <LabelInput
            type="password"
            id="password"
            name="password"
            required
            placeholder="비밀번호를 입력하세요"
          />
        </LabelWrap>
        <LabelWrap>
          <LabelTitle htmlFor="name">이름</LabelTitle>
          <LabelInput
            type="name"
            id="name"
            name="name"
            required
            placeholder="이름을 입력하세요"
          />
        </LabelWrap>
        {/* <div>
          <label htmlFor="birth">생년월일</label>
          <div>
            <select name="year" id="year">
              <option value="1994">1994년</option>
              <option value="1995">1995년</option>
            </select>
            <select name="" id=""></select>
          </div>
        </div> */}
        <ButtonWrap>
          <Button>가입하기</Button>
        </ButtonWrap>
      </SignForm>
    </SignWrap>
  );
}
