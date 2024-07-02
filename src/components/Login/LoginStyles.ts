import styled from "@emotion/styled";
import Link from "next/link";

export const LoginWrapper = styled.div`
  height: 100%;
  max-width: 760px;
  margin: 0 auto;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 40px 20px;
`;

export const LoginWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
`;

export const LoginLabel = styled.label`
  color: #4b5a64;
  font-size: 14px;
  font-weight: 500;
`;

export const LoginInput = styled.input`
  border: 1px solid #e6ecf1;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  text-indent: 10px;
  padding: 0px 12px;
  font-size: 16px;
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
  }
`;

export const LoginButton = styled.button`
  color: #fff;
  background-color: #1570ff;
  border: none;
  width: 100%;
  text-align: center;
  height: 56px;
  padding: 0 20px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;

export const FindForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
`;

export const Nav = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: #727f88;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #000;
    font-weight: bold;
  }
`;

export const NavButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: #727f88;
  margin-top: 2px;
  text-align: center;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: #000;
    font-weight: bold;
  }
`;
