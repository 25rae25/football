"use client";

import { ChangeEvent, FormEvent } from "react";
import * as S from "./WriteStyles";

type Props = {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

// WriteWrap -->  Write 변경
export default function Write({ handleInput, handleSubmit }: Props) {
  return (
    <S.WriteWrapper>
      <S.WriteForm onSubmit={handleSubmit}>
        <S.Write>
          <S.WritelTitle>팀명</S.WritelTitle>
          {/* // handleInput={handleInput} --> onChange={handleInput} */}
          <S.WriteInput onChange={handleInput} placeholder="FC 한국" />
        </S.Write>
        <S.Write>
          <S.WritelTitle>주요 활동지역</S.WritelTitle>
          <S.WriteInput placeholder="서울특별시 동작구" />
        </S.Write>
        <S.Write>
          <S.WritelTitle>운동 장소</S.WritelTitle>
          <S.WriteInput placeholder="서울교육대학교 운동장" />
        </S.Write>
        <S.Write>
          <S.WritelTitle>운동 시간</S.WritelTitle>
          <S.WriteInput placeholder="매주 일요일 오후 1~3시" />
        </S.Write>
        <S.Write>
          <S.WritelTitle>주요 연령대</S.WritelTitle>
          <S.WriteInput placeholder="20~30대" />
        </S.Write>
        <S.Write>
          <S.WritelTitle>회비</S.WritelTitle>
          <S.WriteInput placeholder="20,000원" />
        </S.Write>
        <S.Write>
          <S.WritelTitle>대표번호</S.WritelTitle>
          <S.WriteInput placeholder="010-2518-2688" />
        </S.Write>
        <S.Write>
          <S.WritelTitle>소개</S.WritelTitle>
          <S.WriteInput placeholder="안녕하세요 FC서초 입니다" />
        </S.Write>
        <S.ImageInput type="file" multiple />
        <S.SubmitButton>작성하기</S.SubmitButton>
        {/* <S.EditButton>수정하기</S.EditButton> */}
      </S.WriteForm>
    </S.WriteWrapper>
  );
}
