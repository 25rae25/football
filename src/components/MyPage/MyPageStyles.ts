import styled from "@emotion/styled";
import Image from "next/image";
import { LuUsers } from "react-icons/lu";

export const MyPageWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const MyPageWrap = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-top: 30px;
`;

export const MyPage = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const PageContent = styled.div`
  padding-left: 20px;
`;

export const ProfileImg = styled(Image)`
  background-color: white;
  object-fit: cover;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  padding: 0.3rem;
`;

export const TeamIcon = styled(LuUsers)`
  width: 100px;
  height: 100px;
  padding: 0.3rem;
  color: #1570ff;
`;
