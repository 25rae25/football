import { ChangeEvent, FormEvent } from "react";
import * as S from "./LoginStyles";
import FindId from "../FindId/FindId";

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  // handleCloseModal: () => void;
  handleModal: () => void;
  showModal: boolean;
};

export default function Login({
  handleSubmit,
  handleInput,
  handleModal,
  showModal,
}: Props) {
  return (
    <S.LoginWrapper>
      <S.LoginForm onSubmit={handleSubmit}>
        <S.LoginWrap>
          <S.LoginLabel>이메일</S.LoginLabel>
          <S.LoginInput
            type="text"
            name="email"
            placeholder="이메일 주소를 입력하세요."
            onChange={handleInput}
          />
        </S.LoginWrap>
        <S.LoginWrap>
          <S.LoginLabel>비밀번호</S.LoginLabel>
          <S.LoginInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요."
            onChange={handleInput}
          />
        </S.LoginWrap>
        <S.LoginButton>로그인</S.LoginButton>
      </S.LoginForm>
      <S.FindForm>
        {showModal && <FindId handleModal={handleModal} />}
        <S.NavButton onClick={handleModal}>아이디 비밀번호찾기</S.NavButton>
        <S.Nav href="/signup">회원가입</S.Nav>
      </S.FindForm>
    </S.LoginWrapper>
  );
}
