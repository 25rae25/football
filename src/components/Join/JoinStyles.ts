import styled from "@emotion/styled";

export const JoinWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 40%;
  height: 20%;
`;
// JoinWrap 반응형때 사이즈 줄여야함 @media

export const JoinWrap = styled.div`
  margin-top: 20px;
`;

export const JoinTitle = styled.h3`
  text-align: center;
  color: #ccc;
  margin-bottom: 5px;
`;

export const SubmitButton = styled.button`
  width: 40%;
  padding: 15px;
  display: block;
  margin: 10px auto 0 auto;
  border-radius: 7px;
  font-size: 17px;
  border: 0;
  color: #3b82f6;
  background-color: #e8f7ff;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #3b82f6;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  border: 0;
  font-size: 1.25rem;
  color: #3b82f6;
  background-color: #e8f7ff;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #3b82f6;
  }
`;
