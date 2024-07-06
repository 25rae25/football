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
  width: 600px;
  height: 30%;
`;
// JoinWrap 반응형때 사이즈 줄여야함 @media

export const JoinWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const SubmitButton = styled.button`
  padding: 20px 100px;
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
  padding: 20px 40px;
  border: 0;
  color: #3b82f6;
  background-color: #e8f7ff;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #3b82f6;
  }
`;
