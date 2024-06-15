"use client";

import * as S from "./ListStyles";

export default function List() {
  return (
    <S.MainWrapper>
      <ul>
        <li>
          {/* Link로 감싸야하는 곳 */}
          <S.MainWrap>
            <S.MainTime>16:00</S.MainTime>
            <S.MainInfo>
              <div>서울 영등포 SKY풋살파크 A구장</div>
              <S.MainMatch>
                <S.MainOptions>6vs6</S.MainOptions>
                <S.MainOptions>3파전</S.MainOptions>
              </S.MainMatch>
            </S.MainInfo>
            <S.MainStatusWrap>
              <S.StatusYet>마감임박!</S.StatusYet>
            </S.MainStatusWrap>
          </S.MainWrap>
        </li>
        <li>
          {/* Link로 감싸야하는 곳 */}
          <S.MainWrap>
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
        </li>
        <li>
          {/* Link로 감싸야하는 곳 */}
          <S.MainWrap>
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
        </li>
      </ul>
    </S.MainWrapper>
  );
}
