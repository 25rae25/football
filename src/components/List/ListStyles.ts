import styled from "@emotion/styled";
import Link from "next/link";

export const MainWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const MainLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const MainWrap = styled.div`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const MainTime = styled.div`
  width: 10%;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
`;

export const MainInfo = styled.div`
  width: 80%;
  padding-right: 10px;
`;

export const MainMatch = styled.div`
  font-size: 12px;
  color: #727f88;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
export const MainOptions = styled.span`
  padding-right: 3px;
`;

export const MainStatusWrap = styled.div`
  width: 10%;
`;

export const StatusStart = styled.div`
  color: #fff;
  background-color: #1570ff;
  width: 100%;
  text-align: center;
  padding: 8px 5px;
  border-radius: 6px;
  font-size: 12px;
`;

export const StatusYet = styled.div`
  color: #fff;
  background-color: #ff4d37;
  width: 100%;
  text-align: center;
  padding: 8px 5px;
  border-radius: 6px;
  font-size: 12px;
`;

export const StatusFinish = styled.div`
  color: #ccc;
  background-color: #eeeeee;
  width: 100%;
  text-align: center;
  padding: 8px 5px;
  border-radius: 6px;
  font-size: 12px;
`;

// ::before {
//   background-color: #3534a5, #ff5d5d, #ffc645
// }
