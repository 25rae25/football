import styled from "@emotion/styled";
import { GiSoccerField } from "react-icons/gi";
import { LuUsers } from "react-icons/lu";
import { TbShoe } from "react-icons/tb";

export const Section = styled.div`
  display: flex;
`;

export const MatchContainer = styled.div`
  width: 60%;
  height: auto;
  background-color: #fff;
`;

export const MatchWrapper = styled.div`
  padding: 20px;
  display: inline-flex;
`;

export const MatchWrap = styled.div`
  padding: 20px 0;
  display: flex;
`;

export const MatchTitle = styled.h3`
  padding: 20px;
  display: block;
`;

export const IconTitle = styled.div`
  padding-left: 10px;
  padding-right: 20px;
`;

export const FieldIcon = styled(GiSoccerField)`
  width: 24px;
  height: 24px;
`;

export const UserIcon = styled(LuUsers)`
  width: 24px;
  height: 24px;
`;

export const ShoesIcon = styled(TbShoe)`
  width: 24px;
  height: 24px;
`;

export const SubmitWrapper = styled.div`
  width: 40%;
  margin: 0 auto;
  background-color: #fff;
  margin-left: 10px;
`;

export const SubmitWrap = styled.div`
  padding: 20px 10px;
`;

export const MatchTime = styled.div`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 3px;
`;

export const MatchPlace = styled.div`
  color: #282b33;
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 3px;
`;

export const SubmitBar = styled.div`
  background-color: #00d281;
  font-size: 12px;
  text-align: center;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
  color: #fff;
`;

export const SubmitButton = styled.button`
  background-color: #1570ff;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  border: none;
  border-radius: 6px;
  padding: 12px;
  margin: 20px 0;
`;
