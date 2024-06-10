"use client";

import styled from "@emotion/styled";

const NavbarWrapper = styled.div`
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 11px;
`;

const SearchWrap = styled.div`
  display: flex;
`;

const Searchbar = styled.input`
  width: 350px;
  margin: 0;
  display: inline-block;
  background-color: #f7f7f7;
  padding: 8px;
  border-radius: 6px;
  color: #3e5463;
  border: none;
  height: 40px;
`;

export default function NavbarContainer() {
  return (
    <NavbarWrapper>
      <Navbar>
        <div>Logo</div>
        <SearchWrap>
          <div>
            <label id="search"></label>
            <Searchbar
              type="search"
              id="search"
              placeholder="지역, 구장, 팀 이름으로 찾기"
              maxLength={100}
            />
          </div>
          <div>이미지</div>
        </SearchWrap>
      </Navbar>
    </NavbarWrapper>
  );
}
