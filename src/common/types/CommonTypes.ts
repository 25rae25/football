export interface ICommon {
  teamId: number;
  name: string;
  province: string;
  address: string;
  time: string;
  range: string;
  fee: number;
  imageUrl: string;
  phone: string;
  introduction: string;
  title?: string;
  userId?: number;
}

export interface ITeamdata {
  teamData: ICommon;
  token: string | null;
}

// 모든 공통 타입을 넣어라
