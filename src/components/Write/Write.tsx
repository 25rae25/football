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
        <S.ImageLabel htmlFor="inputFile">사진 등록하기</S.ImageLabel>
        <S.ImageInput type="file" id="inputFile" />
        <div>
          <S.TeamImg
            // src={imagePreview}
            src=""
            layout="responsive"
            width={100}
            height={100}
            alt="팀사진"
          />
        </div>
        {/* handleClick={handleClick} */}
        <S.SubmitButton>작성하기</S.SubmitButton>
        {/* <S.EditButton>수정하기</S.EditButton> */}
      </S.WriteForm>
    </S.WriteWrapper>
  );
}

// input display none 다른거 클릭했을때 작동하게 해야하니까 useRef()기능 사용 onChange이벤트로 이미지가 바꼈다는걸 알려주고 바뀐걸 넣어주고(useState) 이미지 path
// e.target.file로 넣고 이미지에 해당url input창 대신에 보여줘야함
