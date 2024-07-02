export interface ICommon {
  teamId: number;
  authorId: number;
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
}

export interface GCommon {
  gameId: number;
  stadium: string;
  address: string;
  people: string;
  shoes: string;
  time: string;
}

export interface Gamedata {
  gameData: GCommon;
}
