import { ChangeEvent, FormEvent, ForwardedRef, MouseEventHandler } from "react";
import * as S from "./WriteStyles";
import TeamInput from "../TeamInput/TeamInput";
import PreviewImg from "../PreviewImg/PreviewImg";

type Props = {
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddUpload: MouseEventHandler<HTMLButtonElement>;
  handleUpload: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: () => void;
  upload: string;
  fileRef: ForwardedRef<HTMLInputElement>;
};

export default function Write({
  handleInput,
  handleAddUpload,
  handleUpload,
  handleRemoveImage,
  upload,
  fileRef,
}: Props) {
  return (
    <S.WriteWrapper>
      <TeamInput
        title="제목"
        type="text"
        id="title"
        name="title"
        placeholder="20대가 많은 팀"
        handleInput={handleInput}
      />
      <TeamInput
        title="팀명"
        type="text"
        id="name"
        name="name"
        placeholder="FC 한국"
        handleInput={handleInput}
      />
      <TeamInput
        title="주요 활동지역"
        type="text"
        id="province"
        name="province"
        placeholder="서울특별시 동작구"
        handleInput={handleInput}
      />
      <TeamInput
        title="운동 장소"
        type="text"
        id="address"
        name="address"
        placeholder="서울교육대학교 운동장"
        handleInput={handleInput}
      />
      <TeamInput
        title="운동 시간"
        type="text"
        id="time"
        name="time"
        placeholder="매주 일요일 오후 1~3시"
        handleInput={handleInput}
      />
      <TeamInput
        title="주요 연령대"
        type="text"
        id="range"
        name="range"
        placeholder="20~30대"
        handleInput={handleInput}
      />
      <TeamInput
        title="회비"
        type="text"
        id="fee"
        name="fee"
        placeholder="20,000원"
        handleInput={handleInput}
      />
      <TeamInput
        title="대표번호"
        type="text"
        id="phone"
        name="phone"
        placeholder="010-1234-5678"
        handleInput={handleInput}
      />
      <TeamInput
        title="소개"
        type="text"
        id="introduction"
        name="introduction"
        placeholder="안녕하세요 FC서초 입니다"
        handleInput={handleInput}
      />
      {/* <PreviewImg
        handleAddUpload={handleAddUpload}
        handleUpload={handleUpload}
        handleRemoveImage={handleRemoveImage}
        upload={upload}
        fileRef={fileRef}
      /> */}
      {/* {userId ? (
          <S.SubmitButton>작성하기</S.SubmitButton>
        ) : (
          <S.SubmitButton>수정하기</S.SubmitButton>
        )} */}
      <S.SubmitButton>작성하기</S.SubmitButton>
    </S.WriteWrapper>
  );
}
