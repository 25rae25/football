"use client";

import styled from "@emotion/styled";

const MainWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const MainWrap = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const MainTime = styled.div`
  width: 10%;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
`;

const MainInfo = styled.div`
  width: 80%;
  padding-right: 10px;
`;

const MainMatch = styled.div`
  font-size: 12px;
  color: #727f88;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const MainOptions = styled.span`
  padding-right: 3px;
`;

const MainStatusWrap = styled.div`
  width: 10%;
`;

const StatusStart = styled.div`
  color: #fff;
  background-color: #1570ff;
  width: 100%;
  text-align: center;
  padding: 8px 5px;
  border-radius: 6px;
  font-size: 12px;
`;

const StatusYet = styled.div`
  color: #fff;
  background-color: #ff4d37;
  width: 100%;
  text-align: center;
  padding: 8px 5px;
  border-radius: 6px;
  font-size: 12px;
`;

const StatusFinish = styled.div`
  color: #ccc;
  background-color: #eeeeee;
  width: 100%;
  text-align: center;
  padding: 8px 5px;
  border-radius: 6px;
  font-size: 12px;
`;

export default function MainContainer() {
  return (
    <MainWrapper>
      <ul>
        <li>
          {/* Link로 감싸야하는 곳 */}
          <MainWrap>
            <MainTime>16:00</MainTime>
            <MainInfo>
              <div>서울 영등포 SKY풋살파크 A구장</div>
              <MainMatch>
                <MainOptions>6vs6</MainOptions>
                <MainOptions>3파전</MainOptions>
              </MainMatch>
            </MainInfo>
            <MainStatusWrap>
              <StatusYet>마감임박!</StatusYet>
            </MainStatusWrap>
          </MainWrap>
        </li>
        <li>
          {/* Link로 감싸야하는 곳 */}
          <MainWrap>
            <MainTime>17:00</MainTime>
            <MainInfo>
              <div>서울 송파 천마 풋살파크 2구장</div>
              <MainMatch>
                <MainOptions>6vs6</MainOptions>
                <MainOptions>3파전</MainOptions>
              </MainMatch>
            </MainInfo>
            <MainStatusWrap>
              <StatusFinish>마감</StatusFinish>
            </MainStatusWrap>
          </MainWrap>
        </li>
        <li>
          {/* Link로 감싸야하는 곳 */}
          <MainWrap>
            <MainTime>17:00</MainTime>
            <MainInfo>
              <div>서울 논현 누리풋볼클럽 실내구장</div>
              <MainMatch>
                <MainOptions>4vs4</MainOptions>
                <MainOptions>3파전</MainOptions>
              </MainMatch>
            </MainInfo>
            <MainStatusWrap>
              <StatusStart>신청가능</StatusStart>
            </MainStatusWrap>
          </MainWrap>
        </li>
      </ul>
    </MainWrapper>
  );
}
