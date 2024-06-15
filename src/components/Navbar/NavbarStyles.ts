import styled from "@emotion/styled";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export const NavbarWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 11px;
`;

export const SearchWrapper = styled.div`
  display: flex;
`;

export const UserIcon = styled(CiUser)`
  font-size: 38px;
  color: #282b33;
  height: 100%;
  padding: 5px;
`;

export const SearchWrap = styled.div`
  background-color: #f7f7f7;
  min-width: 350px;
  margin: 0;
  padding: 8px;
  border: none;
  border-radius: 6px;
  height: 40px;
  color: #3e5463;
  @media (max-width: 768px) {
    min-width: initial;
  }
`;

export const SearchIcon = styled(CiSearch)`
  width: 24px;
  height: 22px;
  padding: 0;
  display: inline-block;
`;

export const Searchbar = styled.input`
  width: calc(100% - 60px);
  font-size: 14px;
  padding: 0px;
  margin-left: 5px;
  border-radius: 6px;
  color: #3e5463;
  border: none;
  background-color: transparent;
  vertical-align: super;
  &::placeholder {
    transition: all 0.3s ease-in-out;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export const Nav = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 18px;
`;
