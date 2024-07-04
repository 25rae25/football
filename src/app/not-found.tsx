"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundContainer = styled.div`
  background-color: #e5e7eb;
  width: 100%;
  padding-left: 4rem;
  padding-right: 4rem;
  height: calc(100vh - 58px);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

const NotFoundWrap = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1024px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;

const NotFoundText = styled.p`
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  color: #d1d5db;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;

const NotFoundContent = styled.p`
  color: #6b7280;
  margin-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  background-color: #2563eb;
  color: #f9fafb;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin-top: 1.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundWrap>
        <NotFoundText className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </NotFoundText>
        <NotFoundContent>메인페이지로 이동해주세요</NotFoundContent>
        <StyledLink
          href="/"
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
        >
          <FaArrowLeft />
          홈으로 가기
        </StyledLink>
      </NotFoundWrap>
    </NotFoundContainer>
  );
}
