export interface ITeam {
  address?: string;
  createdAt: Date;
  fee?: number;
  id: number;
  imageUrl: string;
  introduction: string;
  name: string;
  phone?: string;
  province: string;
  range?: string;
  time: string;
  title: string;
  userId: number;
}

export interface TeamTypes {
  teams: ITeam[];
}

export interface Team {
  id: number;
}
