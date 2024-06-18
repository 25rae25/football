import styled from "@emotion/styled";
import { GiSoccerField } from "react-icons/gi";
import { LuUsers } from "react-icons/lu";
import { TbShoe } from "react-icons/tb";

export const MatchContainer = styled.div`
  width: 60%;
  height: auto;
  background-color: #fff;
`;

export const MatchWrapper = styled.div`
  padding: 20px;
  display: flex;
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
