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
export const postWrite = (data: {
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
}) => {
  return axios.post(`${getApiUrl()}/teams`, { ...data });
};

// 팀소개글 불러오기
export const getTeams = () => {
  return axios.get(`${getApiUrl()}/teams?page=1&size=10`);
};

// 팀 정보 불러오기(개별)
export const getTeam = (teamId: number) => {
  return axios.get(`${getApiUrl()}/teams/${teamId}`);
};
