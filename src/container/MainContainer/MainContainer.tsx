"use client";

import styled from "@emotion/styled";

const MainWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const MainTime = styled.div`
  width: 10%;
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
          <div>16:00</div>
          <MainInfo>
            <h3>서울 영등포 SKY풋살파크 A구장</h3>
            <MainMatch>
              <MainOptions>6vs6</MainOptions>
              <MainOptions>3파전</MainOptions>
            </MainMatch>
          </MainInfo>
          <MainStatusWrap>
            <StatusYet>마감임박!</StatusYet>
          </MainStatusWrap>
        </li>
      </ul>
    </MainWrapper>
  );
}
