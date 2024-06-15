"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

const ExploreWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const ExploreWrap = styled.div`
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

const ExploreItem = styled.div`
  padding: 5px;
  min-width: 60px;
`;

const ExploreText = styled.span`
  margin-top: 5px;
  font-size: 12px;
`;

export default function ExploreContainer() {
  return (
    <ExploreWrapper>
      <ExploreWrap>
        <ExploreItem>
          <Link href="/introduce">
            {/* 이미지 들어갈곳 */}
            {/* <Image
              src=""
              width={24}
              height={24}
              alt="메인사진"
            /> */}
            <ExploreText>팀소개</ExploreText>
          </Link>
        </ExploreItem>
        <ExploreItem>
          <Link href="/">
            {/* 이미지 들어갈곳 */}
            <ExploreText>팀홍보</ExploreText>
          </Link>
        </ExploreItem>
        <ExploreItem>
          <Link href="/">
            {/* 이미지 들어갈곳 */}
            <ExploreText>팀기록</ExploreText>
          </Link>
        </ExploreItem>
        <ExploreItem>
          <Link href="/">
            {/* 이미지 들어갈곳 */}
            <ExploreText>챌린지</ExploreText>
          </Link>
        </ExploreItem>
        <ExploreItem>
          <Link href="/start">
            {/* 이미지 들어갈곳 */}
            <ExploreText>시작하기</ExploreText>
          </Link>
        </ExploreItem>
      </ExploreWrap>
    </ExploreWrapper>
  );
}
