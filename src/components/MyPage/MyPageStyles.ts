import styled from "@emotion/styled";
import Image from "next/image";
import { LuUsers } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

export const MyPageWrapper = styled.div`
  background-color: #f8fafb;
  width: 100%;
  height: 100%;
`;

export const MyPageWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background-color: #fff;
  height: 100%;
  padding-top: 30px;
  margin-bottom: 30px;
`;

export const MyPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

export const MeailIcon = styled(MdOutlineEmail)`
  width: 100px;
  height: 100px;
  padding: 0.3rem;
  color: #fee500;
`;

export const CalendarWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background-color: #fff;
  height: 100%;
  padding-top: 30px;
  margin-bottom: 20px;
`;
