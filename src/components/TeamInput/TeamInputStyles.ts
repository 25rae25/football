import styled from "@emotion/styled";

export const Write = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
`;

export const WritelTitle = styled.div`
  font-size: 17px;
  /* font-weight: bold; */
`;

export const WriteInput = styled.input`
  border: none;
  background-color: #f7f7f7;
  border-radius: 6px;
  width: 20%;
  padding: 13px 10px;
  text-indent: 5px;
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
