import styled from "@emotion/styled";

export const LabelWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 30px;
`;

export const LabelTitle = styled.label`
  color: #4b5a64;
  font-size: 14px;
  font-weight: 500;
`;

export const LabelInput = styled.input`
  border: 1px solid #e6ecf1;
  background-color: #f8fafb;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  text-indent: 10px;
  padding: 10px;
  &::placeholder {
    transition: all 0.3s ease-in-out;
  }
  &:focus::placeholder {
    color: transparent;
  }
  &:focus {
    box-shadow: 0 0 0 3px rgba(33, 150, 243, 0.2);
  }
`;

export const ErrorText = styled.p`
  color: #ff5360;
  font-weight: bold;
  font-size: 12px;
  position: absolute;
  bottom: -20px;
  left: 10px;
`;
