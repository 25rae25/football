"use client";

import styled from "@emotion/styled";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

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

const SearchWrapper = styled.div`
  display: flex;

  .user {
    font-size: 38px;
    color: #282b33;
    height: 100%;
    padding: 5px;
  }
`;

const SearchWrap = styled.div`
  background-color: #f7f7f7;
  width: 350px;
  margin: 0;
  padding: 8px;
  border: none;
  border-radius: 6px;
  height: 40px;
  color: #3e5463;

  .search {
    width: 24px;
    height: 22px;
    padding: 0;
    display: inline-block;
  }
`;

const Searchbar = styled.input`
  width: calc(100% - 60px);
  font-size: 14px;
  padding: 0px;
  margin-left: 5px;
  border-radius: 6px;
  color: #3e5463;
  border: none;
  background-color: transparent;
  vertical-align: super;
`;

export default function NavbarContainer() {
  return (
    <NavbarWrapper>
      <Navbar>
        <Link href="/">Logo</Link>
        <SearchWrapper>
          <SearchWrap>
            <CiSearch className="search" />
            <label id="search"></label>
            <Searchbar
              type="search"
              id="search"
              placeholder="지역, 팀 이름으로 찾기"
              maxLength={100}
            />
          </SearchWrap>
          <Link href="/login">
            <CiUser className="user" />
          </Link>
        </SearchWrapper>
      </Navbar>
    </NavbarWrapper>
  );
}
