"use client";

import { ChangeEvent, FormEvent } from "react";
import * as S from "./WriteStyles";
import TemaInput from "../TemaInput/TemaInput";

type Props = {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleClick: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Write({ handleInput, handleSubmit }: Props) {
  return (
    <S.WriteWrapper>
      <S.WriteForm onSubmit={handleSubmit}>
        <TemaInput
          title="팀명"
          type="text"
          id="teamName"
          name="teamName"
          placeholder="FC 한국"
          handleInput={handleInput}
        />
        <TemaInput
          title="주요 활동지역"
          type="text"
          id="ActivityArea"
          name="ActivityArea"
          placeholder="서울특별시 동작구"
          handleInput={handleInput}
        />
        <TemaInput
          title="운동 장소"
          type="text"
          id="exercisePlace"
          name="exercisePlace"
          placeholder="서울교육대학교 운동장"
          handleInput={handleInput}
        />
        <TemaInput
          title="운동 시간"
          type="text"
          id="exerciseTime"
          name="exerciseTime"
          placeholder="매주 일요일 오후 1~3시"
          handleInput={handleInput}
        />
        <TemaInput
          title="주요 연령대"
          type="text"
          id="ageRange"
          name="ageRange"
          placeholder="20~30대"
          handleInput={handleInput}
        />
        <TemaInput
          title="회비"
          type="text"
          id="dues"
          name="dues"
          placeholder="20,000원"
          handleInput={handleInput}
        />
        <TemaInput
          title="대표번호"
          type="text"
          id="phone"
          name="phone"
          placeholder="010-1234-5678"
          handleInput={handleInput}
        />
        <TemaInput
          title="소개"
          type="text"
          id="introduction"
          name="introduction"
          placeholder="안녕하세요 FC서초 입니다"
          handleInput={handleInput}
        />
        <S.ImageLabel htmlFor="inputFile">
          <S.ImageInput type="file" id="inputFile" />
        </S.ImageLabel>
        {/* handleClick={handleClick} */}
        <S.SubmitButton>작성하기</S.SubmitButton>
        {/* <S.EditButton>수정하기</S.EditButton> */}
      </S.WriteForm>
    </S.WriteWrapper>
  );
}
