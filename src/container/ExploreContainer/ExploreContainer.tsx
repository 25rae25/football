"use client";

import styled from "@emotion/styled";
import Link from "next/link";

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
          <Link href="/">
            {/* 이미지 들어갈곳 */}
            {/* <Image
              src="https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/explore_heart.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvZXhwbG9yZV9oZWFydC5zdmciLCJpYXQiOjE3MTgzMzI3MDAsImV4cCI6MTc0OTg2ODcwMH0.1dOQ6SX5pLpU0G6hTAiPHX3Ow1UJ6EVTe9tm65nIURk&t=2024-06-14T02%3A38%3A21.071Z"
              width={24}
              height={24}
              alt="메인사진"
            /> */}
            <ExploreText>얼리버드</ExploreText>
          </Link>
        </ExploreItem>
        <ExploreItem>
          <Link href="/">
            {/* 이미지 들어갈곳 */}
            <ExploreText>여자매치</ExploreText>
          </Link>
        </ExploreItem>
        <ExploreItem>
          <Link href="/">
            {/* 이미지 들어갈곳 */}
            <ExploreText>스타터</ExploreText>
          </Link>
        </ExploreItem>
        <ExploreItem>
          <Link href="/">
            {/* 이미지 들어갈곳 */}
            <ExploreText>챌린지</ExploreText>
          </Link>
        </ExploreItem>
        <ExploreItem>
          <Link href="/">
            {/* 이미지 들어갈곳 */}
            <ExploreText>시작하기</ExploreText>
          </Link>
        </ExploreItem>
      </ExploreWrap>
    </ExploreWrapper>
  );
}
