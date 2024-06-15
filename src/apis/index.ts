import axios from "axios";

const getApiUrl = () => process.env.NEXT_PUBLIC_BASE_URL;

// 회원가입
export const postSignup = (data: {
  email: string;
  password: string;
  name: string;
}) => {
  return axios.post(`${getApiUrl()}/signup`, { ...data });
};
