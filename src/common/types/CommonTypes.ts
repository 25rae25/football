import { ChangeEvent, FormEvent } from "react";

export interface ICommon {
  teamId?: number;
  authorId?: number;
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
  userId: number;
  isEdit: boolean;
  hadleIsEdit: () => void;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEditSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export interface GCommon {
  id: number;
  stadium: string;
  address: string;
  people: string;
  shoes: string;
  time: string;
}

export interface Gamedata {
  gameData: GCommon;
  handleModal: () => void;
}

export interface UCommon {
  id?: number;
  email: string;
  name: string;
}
