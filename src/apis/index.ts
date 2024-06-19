import axios from "axios";

const getApiUrl = () => process.env.NEXT_PUBLIC_BASE_URL;

// 회원가입
export const postSignup = (data: {
  email: string;
  password: string;
  name: string;
}) => {
  return axios.post(`${getApiUrl()}/auths/sign-up`, { ...data });
};

// 팀홍보글 작성
export const postWrite = (
  teadId: number,
  data: {
    name: string;
    province: string;
    address: string;
    time: string;
    range: string;
    fee: number;
    imageUrl: string;
    phone: string;
    introduction: string;
    title: string;
  }
) => {
  return axios.post(`${getApiUrl()}/teams/${teadId}`, { ...data });
};
