import axios from "axios";

const getApiUrl = () => process.env.NEXT_PUBLIC_BASE_URL;
// 토큰값 저장
export const getAuthToken = () => {
  return localStorage.getItem("accessToken");
};

const api = axios.create({
  baseURL: getApiUrl(),
});

api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/////// 회원 및 팀

// 회원가입
export const postSignup = (data: {
  email: string;
  password: string;
  name: string;
}) => {
  return api.post(`${getApiUrl()}/auths/sign-up`, { ...data });
};

// 로그인
export const postLogin = (data: { email: string; password: string }) => {
  return api.post(`${getApiUrl()}/auths/login/email`, { ...data });
};

// 팀홍보글 작성
export const postWrite = (data: {
  userId?: number;
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
  return api.post(`${getApiUrl()}/teams`, { ...data });
};

// 팀 정보 불러오기(전체)
export const getTeams = () => {
  return api.get(`${getApiUrl()}/teams?page=1&size=12`);
};

// 팀 정보 불러오기(개별)
export const getTeam = (teamId: number) => {
  return api.get(`${getApiUrl()}/teams/${teamId}`);
};

// 팀정보 수정하기(put)
export const putTeam = (
  teamId: number,
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
    authorId?: number;
  }
) => {
  return api.put(`${getApiUrl()}/teams/${teamId}`, { ...data });
};

// 팀정보 삭제하기(delete)
export const deleteTeam = (teamId: number) => {
  return api.delete(`${getApiUrl()}/teams/${teamId}`);
};

// 유저정보 가져오기
export const getUser = () => {
  return api.get(`${getApiUrl()}/users/me`);
};

// 게임 정보 가져오기
export const getGames = () => {
  return api.get(`${getApiUrl()}/games?page=1&size=1&month=5`);
};

// 게임 단건 정보 가져오기
export const getGame = (gameId: number) => {
  return api.get(`${getApiUrl()}/games/${gameId}`);
};
