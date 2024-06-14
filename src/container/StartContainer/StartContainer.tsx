"use client";

import styled from "@emotion/styled";
import Image from "next/image";

const StartWrapper = styled.div`
  margin: 0 auto;
  background-color: #f3f5f7;
`;

const StartWrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background-color: #fff;
`;

export default function StartContainer() {
  return (
    <StartWrapper>
      <StartWrap>
        <Image
          src="https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/start.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvc3RhcnQuanBnIiwiaWF0IjoxNzE4MzMzNTExLCJleHAiOjE3NDk4Njk1MTF9.tYZ1auHpRX7KHcRehFliMjXBnX3LPfI-nDfhK8mvMuo&t=2024-06-14T02%3A51%3A51.850Z"
          width={1024}
          height={593}
          alt="메인사진"
        />
        <div>
          <h1>플랩풋볼 성공적으로 데뷔하기</h1>
        </div>
      </StartWrap>
    </StartWrapper>
  );
}
