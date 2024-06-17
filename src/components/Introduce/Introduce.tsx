"use client";

import * as S from "./IntroduceStyles";

export default function Introduce() {
  return (
    <S.IntroduceWrapper>
      <S.IntroduceWrap>
        {/* 이미지 height 크기 조정 */}
        <S.IntroduceImage
          src="https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/soccerteam.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvc29jY2VydGVhbS5qcGciLCJpYXQiOjE3MTg2MDU0NzcsImV4cCI6MTc1MDE0MTQ3N30.AYNUJCrVYQ1wVutyY_Fud10dra8b7aHGKnB9_jCZ6oc&t=2024-06-17T06%3A24%3A37.742Z"
          width={1024}
          height={100}
          alt="팀사진"
        />
        <S.Introduce>
          <S.IntroduceTitle>팀명</S.IntroduceTitle>
          <S.IntroduceContent>FC 서초</S.IntroduceContent>
        </S.Introduce>
        <S.Introduce>
          <S.IntroduceTitle>주요 활동지역</S.IntroduceTitle>
          <S.IntroduceContent>서울특별시 동작구</S.IntroduceContent>
        </S.Introduce>
        <S.Introduce>
          <S.IntroduceTitle>운동 장소</S.IntroduceTitle>
          <S.IntroduceContent>서울교육대학교 운동장</S.IntroduceContent>
        </S.Introduce>
        <S.Introduce>
          <S.IntroduceTitle>운동 시간</S.IntroduceTitle>
          <S.IntroduceContent>매주 일요일 오후 1~3시</S.IntroduceContent>
        </S.Introduce>
        <S.Introduce>
          <S.IntroduceTitle>주요 연령대</S.IntroduceTitle>
          <S.IntroduceContent>20~30대</S.IntroduceContent>
        </S.Introduce>
        <S.Introduce>
          <S.IntroduceTitle>운동 장소</S.IntroduceTitle>
          <S.IntroduceContent>서울교육대학교 운동장</S.IntroduceContent>
        </S.Introduce>
        <S.Introduce>
          <S.IntroduceTitle>회비</S.IntroduceTitle>
          <S.IntroduceContent>20,000원</S.IntroduceContent>
        </S.Introduce>
      </S.IntroduceWrap>
    </S.IntroduceWrapper>
  );
}
