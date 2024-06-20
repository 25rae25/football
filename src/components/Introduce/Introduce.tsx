"use client";

import dayjs from "dayjs";
import * as S from "./IntroduceStyles";

interface TeamTypes {
  teams: [
    {
      address?: string;
      createdAt: Date;
      fee?: number;
      id: number;
      imageUrl: string;
      introduction?: string;
      name: string;
      phone?: string;
      province: string;
      range?: string;
      time?: string;
      title: string;
      userId: number;
    }
  ];
}

export default function Introduce({ teams }: TeamTypes) {
  return (
    <S.IntroduceWrapper>
      <S.IntroduceWrap>
        <S.IntroduceTitle>팀소개</S.IntroduceTitle>
        <S.IntroduceEnroll href="/write">팀소개글 작성</S.IntroduceEnroll>
      </S.IntroduceWrap>
      <S.TeamWrapper>
        {teams ? (
          teams?.map((item: any) => (
            <S.TeamWrap key={item.id}>
              <S.Team href="/introduceDetail">
                {/* <S.TeamImage
                  src={item?.imageUrl}
                  width={24}
                  height={24}
                  alt="팀사진"
                /> */}
                <S.TeamTitle>{item?.name}</S.TeamTitle>
                <S.TeamContent>{item?.introduction}</S.TeamContent>
                <S.TeamDate>
                  {dayjs(item?.createdAt).format("YYYY-MM-DD")}
                </S.TeamDate>
              </S.Team>
            </S.TeamWrap>
          ))
        ) : (
          <div>생성된 팀이 없습니다.</div>
        )}
      </S.TeamWrapper>
    </S.IntroduceWrapper>
  );
}
