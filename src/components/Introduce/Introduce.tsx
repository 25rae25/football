"use client";

import * as S from "./IntroduceStyles";

export default function Introduce() {
  return (
    <S.IntroduceWrapper>
      <S.IntroduceWrap>
        <S.IntroduceTitle>팀소개</S.IntroduceTitle>
        <S.IntroduceEnroll href="/">팀소개글 작성</S.IntroduceEnroll>
      </S.IntroduceWrap>
      {/* map 반목문 들어갈곳 */}
      <S.TeamWrapper>
        <S.TeamWrap>
          <S.Team href="/">
            <S.TeamImage
              src="https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/soccerteam.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvc29jY2VydGVhbS5qcGciLCJpYXQiOjE3MTg2MDg4MTAsImV4cCI6MTc1MDE0NDgxMH0.0W3yjVt9W6npoouwFtqnVYoXfCThqYOXpSo5Rj2lYGs&t=2024-06-17T07%3A20%3A10.986Z"
              width={24}
              height={24}
              alt="팀사진"
            />
            <S.TeamTitle>FC서초</S.TeamTitle>
            <S.TeamContent>젊은분들 모집합니다</S.TeamContent>
            <S.TeamDate>2024.06.17</S.TeamDate>
          </S.Team>
        </S.TeamWrap>
      </S.TeamWrapper>
    </S.IntroduceWrapper>
  );
}
