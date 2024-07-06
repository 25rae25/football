import { Gamedata } from "@/common/types/CommonTypes";
import MatchRule from "./MatchRule";
import * as S from "./MatchStyles";
import dayjs from "dayjs";
import Join from "../Join/Join";

export default function Match({ gameData, showModal, handleModal }: Gamedata) {
  return (
    <S.Section>
      <S.MatchContainer>
        <S.MatchTitle>매치 포인트</S.MatchTitle>
        <S.MatchWrapper>
          <S.MatchWrap>
            <S.FieldIcon />
            <S.IconTitle>6vs6 3파전</S.IconTitle>
          </S.MatchWrap>
          <S.MatchWrap>
            <S.UserIcon />
            <S.IconTitle>{gameData?.people}</S.IconTitle>
          </S.MatchWrap>
          <S.MatchWrap>
            <S.ShoesIcon />
            <S.IconTitle>{gameData?.shoes}</S.IconTitle>
          </S.MatchWrap>
        </S.MatchWrapper>
        <MatchRule />
      </S.MatchContainer>
      <S.SubmitWrapper>
        <S.SubmitWrap>
          <S.MatchTime>
            {dayjs(gameData?.time).format("YYYY-MM-DD HH:mm")}
          </S.MatchTime>
          <S.MatchPlace>{gameData?.address}</S.MatchPlace>
          <S.MatchStadium>{gameData?.stadium}</S.MatchStadium>
          <S.SubmitBar>궁금중을 모두 해결하세요</S.SubmitBar>
          {showModal && <Join handleModal={handleModal} />}
          <S.SubmitButton onClick={handleModal}>신청하기</S.SubmitButton>
        </S.SubmitWrap>
      </S.SubmitWrapper>
    </S.Section>
  );
}
