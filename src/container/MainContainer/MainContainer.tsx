"use client";

import * as apis from "@/apis";
import { GCommon } from "@/common/types/CommonTypes";
import List from "@/components/List/List";
import { useEffect, useState } from "react";

type Props = {
  gameId: number;
};

export default function ListContainer({ gameId }: Props) {
  const [gameData, setGameData] = useState<GCommon>({
    gameId: 0,
    stadium: "",
    address: "",
    people: "",
    shoes: "",
    time: "",
  });

  // 팀전체 정보 가져오기
  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await apis.getGames();
        console.log("response", response);
      } catch (error) {
        console.error("게임 정보를 못불러왔습니다");
      }
    }
    fetchGames();
  }, []);

  return <List gameData={gameData} />;
}
