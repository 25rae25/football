import styled from "@emotion/styled";

export const WriteWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const WriteForm = styled.form``;

export const WriteContent = styled.div`
  color: #807b7b;
`;

export const ImageLabel = styled.label`
  display: block;
  padding: 20px 40px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  margin: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ImageInput = styled.input`
  display: none;
`;

export const SubmitButton = styled.button`
  background-color: #1570ff;
  color: #fff;
  text-align: center;
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  padding: 20px;
  /* margin-top: 20px; */
  border: none;
  width: 40%;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

export const EditButton = styled.button`
  background-color: #1570ff;
  color: #fff;
  text-align: center;
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  padding: 20px;
  /* margin-top: 20px; */
  border: none;
  width: 40%;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;
