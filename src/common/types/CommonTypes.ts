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
}

export interface ITeamdata {
  teamData: ICommon;
}
