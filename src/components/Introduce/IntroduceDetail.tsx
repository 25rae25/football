import { ITeamdata } from "@/common/types/CommonTypes";
import * as S from "./IntroduceDetailStyles";
import { FormEvent } from "react";

type Props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  token: string | null;
  teamData: {
    teamId?: number;
    name: string;
    province: string;
    address: string;
    time: string;
    range: string;
    fee: number;
    imageUrl: string;
    phone: string;
    introduction: string;
    title?: string;
    userId?: number;
  };
};

export default function IntroduceDetail({
  teamData,
  token,
  handleSubmit,
}: Props) {
  return (
    <S.IntroduceDetailWrapper>
      <S.IntroduceDetailWrap onSubmit={handleSubmit}>
        <S.TeamImage
          src={teamData?.imageUrl}
          width={1024}
          height={100}
          alt={`${teamData?.name}팀 단체사진`}
        />
        <S.IntroduceDetail>
          <S.IntroduceDetailTitle>팀명</S.IntroduceDetailTitle>
          <S.IntroduceDetailInput type="text" defaultValue={teamData?.name} />
        </S.IntroduceDetail>
        <S.IntroduceDetail>
          <S.IntroduceDetailTitle>주요 활동지역</S.IntroduceDetailTitle>
          <S.IntroduceDetailContent>
            {teamData.province}
          </S.IntroduceDetailContent>
        </S.IntroduceDetail>
        <S.IntroduceDetail>
          <S.IntroduceDetailTitle>운동 장소</S.IntroduceDetailTitle>
          <S.IntroduceDetailContent>
            {teamData.address}
          </S.IntroduceDetailContent>
        </S.IntroduceDetail>
        <S.IntroduceDetail>
          <S.IntroduceDetailTitle>운동 시간</S.IntroduceDetailTitle>
          <S.IntroduceDetailContent>{teamData.time}</S.IntroduceDetailContent>
        </S.IntroduceDetail>
        <S.IntroduceDetail>
          <S.IntroduceDetailTitle>주요 연령대</S.IntroduceDetailTitle>
          <S.IntroduceDetailContent>{teamData.range}</S.IntroduceDetailContent>
        </S.IntroduceDetail>
        <S.IntroduceDetail>
          <S.IntroduceDetailTitle>회비</S.IntroduceDetailTitle>
          <S.IntroduceDetailContent>{teamData.fee}</S.IntroduceDetailContent>
        </S.IntroduceDetail>
        <S.IntroduceDetail>
          <S.IntroduceDetailTitle>대표번호</S.IntroduceDetailTitle>
          <S.IntroduceDetailContent>{teamData.phone}</S.IntroduceDetailContent>
        </S.IntroduceDetail>
        <S.IntroduceDetail>
          <S.IntroduceDetailTitle>소개</S.IntroduceDetailTitle>
          <S.IntroduceDetailContent>
            {teamData.introduction}
          </S.IntroduceDetailContent>
        </S.IntroduceDetail>
        {token && <S.EditButton>수정하기</S.EditButton>}
        <div>{token}</div>
      </S.IntroduceDetailWrap>
    </S.IntroduceDetailWrapper>
  );
}
