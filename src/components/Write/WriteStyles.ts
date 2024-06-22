import styled from "@emotion/styled";
import Image from "next/image";

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
  margin: 20px auto;
  align-items: center;
  border: 2px dashed #1475cf;
  height: 300px;
  width: 500px;
  cursor: pointer;
  border-radius: 5px;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const TeamImg = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const SubmitButton = styled.button`
  background-color: #1570ff;
  color: #fff;
  text-align: center;
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  padding: 20px;
  margin-top: 20px;
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
