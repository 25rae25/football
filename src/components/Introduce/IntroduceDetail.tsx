import { ITeamdata } from "@/common/types/CommonTypes";
import * as S from "./IntroduceDetailStyles";
import Write from "../Write/Write";

export default function IntroduceDetail({
  teamData,
  userId,
  isEdit,
  handleInput,
  handleEditSubmit,
  hadleIsEdit,
}: ITeamdata) {
  return (
    <>
      {isEdit ? (
        <Write
          handleInput={handleInput}
          handleEditSubmit={handleEditSubmit}
          teamData={teamData}
          isEdit={isEdit}
        />
      ) : (
        <S.IntroduceDetailWrapper>
          <S.IntroduceDetailWrap>
            <div>{teamData?.authorId}</div>
            <S.TeamImage
              src={teamData?.imageUrl}
              width={1024}
              height={100}
              alt={`${teamData?.name}팀 단체사진`}
            />
            <S.IntroduceDetail>
              <S.IntroduceDetailTitle>팀명</S.IntroduceDetailTitle>
              <S.IntroduceDetailContent>
                {teamData.name}
              </S.IntroduceDetailContent>
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
              <S.IntroduceDetailContent>
                {teamData.time}
              </S.IntroduceDetailContent>
            </S.IntroduceDetail>
            <S.IntroduceDetail>
              <S.IntroduceDetailTitle>주요 연령대</S.IntroduceDetailTitle>
              <S.IntroduceDetailContent>
                {teamData.range}
              </S.IntroduceDetailContent>
            </S.IntroduceDetail>
            <S.IntroduceDetail>
              <S.IntroduceDetailTitle>회비</S.IntroduceDetailTitle>
              <S.IntroduceDetailContent>
                {teamData.fee}
              </S.IntroduceDetailContent>
            </S.IntroduceDetail>
            <S.IntroduceDetail>
              <S.IntroduceDetailTitle>대표번호</S.IntroduceDetailTitle>
              <S.IntroduceDetailContent>
                {teamData.phone}
              </S.IntroduceDetailContent>
            </S.IntroduceDetail>
            <S.IntroduceDetail>
              <S.IntroduceDetailTitle>소개</S.IntroduceDetailTitle>
              <S.IntroduceDetailContent>
                {teamData.introduction}
              </S.IntroduceDetailContent>
            </S.IntroduceDetail>
            {teamData?.authorId === userId && (
              <S.EditButton onClick={hadleIsEdit}>수정하기</S.EditButton>
            )}
          </S.IntroduceDetailWrap>
        </S.IntroduceDetailWrapper>
      )}
    </>
  );
}
