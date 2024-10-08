import styled from "@emotion/styled";

export const FindWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 500px;
  height: 160px;
`;

export const FindWrap = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FindInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
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

export const SubmitButton = styled.button`
  margin: 20px auto 0 auto;
  padding: 0.5rem 1rem;
  width: 50%;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;
