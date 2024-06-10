"use client";

import styled from "@emotion/styled";

export default function Navbar() {
  return (
    <div>
      <div>
        <div>Logo</div>
        <div>
          <div>
            <label id="search"></label>
            <input
              type="search"
              id="search"
              placeholder="지역, 구장, 팀 이름으로 찾기"
              maxLength={100}
            />
          </div>
          <div>이미지</div>
        </div>
      </div>
    </div>
  );
}
