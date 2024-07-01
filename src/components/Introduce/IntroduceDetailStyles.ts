import styled from "@emotion/styled";
import Image from "next/image";

export const IntroduceDetailWrapper = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const IntroduceDetailWrap = styled.form``;

export const TeamImage = styled(Image)`
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  display: block;
`;

export const IntroduceDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 15px;
  border-bottom: 1px solid #ddd;
`;

export const IntroduceDetailTitle = styled.div`
  font-size: 17px;
  /* font-weight: bold; */
`;

export const IntroduceDetailContent = styled.div`
  color: #807b7b;
`;

export const IntroduceDetailInput = styled.input`
  color: #807b7b;
  border: none;
  background-color: none;
  font-size: 16px;
`;

export const EditButton = styled.button`
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
  margin: 40px auto 30px auto;
  cursor: pointer;
`;

export const Disable = styled.div`
  display: none;
`;
