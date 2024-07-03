import { GCommon } from "@/common/types/CommonTypes";
import * as S from "./ListStyles";
import dayjs from "dayjs";

type GameTypes = {
  game: GCommon[];
};

export default function List({ game }: GameTypes) {
  return (
    <S.MainWrapper>
      {game ? (
        game?.map((item: any) => (
          <div key={item.id}>
            <S.MainLink href={`/reserve/${item?.id}`}>
              <S.MainWrap>
                <S.MainTime>{dayjs(item?.time).format("HH:mm")}</S.MainTime>
                <S.MainInfo>
                  <div>{item?.stadium}</div>
                  <S.MainMatch>
                    <S.MainOptions>6vs6</S.MainOptions>
                    <S.MainOptions>3파전</S.MainOptions>
                  </S.MainMatch>
                </S.MainInfo>
                <S.MainStatusWrap>
                  <S.StatusYet>마감임박!</S.StatusYet>
                </S.MainStatusWrap>
              </S.MainWrap>
            </S.MainLink>
          </div>
        ))
      ) : (
        <div>생성된 게임이 없습니다.</div>
      )}
    </S.MainWrapper>
  );
}

{
  /* <div>
{/* Link로 감싸야하는 곳 */
}
{
  /* <S.MainWrap>
  <S.MainTime>17:00</S.MainTime>
  <S.MainInfo>
    <div>서울 송파 천마 풋살파크 2구장</div>
    <S.MainMatch>
      <S.MainOptions>6vs6</S.MainOptions>
      <S.MainOptions>3파전</S.MainOptions>
    </S.MainMatch>
  </S.MainInfo>
  <S.MainStatusWrap>
    <S.StatusFinish>마감</S.StatusFinish>
  </S.MainStatusWrap>
</S.MainWrap>
</div>
<div> */
}
{
  /* Link로 감싸야하는 곳 */
}
{
  /* <S.MainWrap>
  <S.MainTime>17:00</S.MainTime>
  <S.MainInfo>
    <div>서울 논현 누리풋볼클럽 실내구장</div>
    <S.MainMatch>
      <S.MainOptions>4vs4</S.MainOptions>
      <S.MainOptions>3파전</S.MainOptions>
    </S.MainMatch>
  </S.MainInfo>
  <S.MainStatusWrap>
    <S.StatusStart>신청가능</S.StatusStart>
  </S.MainStatusWrap>
</S.MainWrap>
</div>  */
}
