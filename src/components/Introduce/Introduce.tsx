"use client";

import dayjs from "dayjs";
import * as S from "./IntroduceStyles";
import { QueryClient } from "@tanstack/react-query";
import { ITeam } from "@/container/IntroduceContainer/IntroTeamTypes";

interface TeamTypes {
  teams: ITeam[];
}

export default function Introduce({ teams }: TeamTypes) {
  const queryClient = new QueryClient();
  // queryClient.prefetchInfiniteQuery({
  //   queryKey: [],
  //   queryFn: getPost
  //   initialPageParam:0
  // })

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
              <S.Team href={`/introduceDetail/${item.id}`}>
                <S.TeamImage
                  src={item?.imageUrl}
                  width={24}
                  height={24}
                  alt="팀사진"
                />
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
