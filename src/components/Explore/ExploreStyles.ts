import styled from "@emotion/styled";
import Link from "next/link";
import { LuUsers } from "react-icons/lu";
import { FiUserPlus } from "react-icons/fi";
import { TiHeartOutline } from "react-icons/ti";
import { CiMemoPad } from "react-icons/ci";

export const ExploreWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const ExploreWrap = styled.div`
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const ExploreItem = styled.div`
  padding: 5px;
  min-width: 60px;
`;

export const ExploreText = styled.div`
  margin-top: 5px;
  font-size: 12px;
`;

export const Nav = styled(Link)`
  text-decoration: none;
  color: #000;
`;

export const UsersIcon = styled(LuUsers)`
  width: 24px;
  height: 24px;
  color: #1570ff;
`;

export const UserPlusIcon = styled(FiUserPlus)`
  width: 24px;
  height: 24px;
  color: #00cb7f;
`;

export const HeartIcon = styled(TiHeartOutline)`
  width: 24px;
  height: 24px;
  color: red;
`;

export const MemoIcon = styled(CiMemoPad)`
  width: 24px;
  height: 24px;
`;
