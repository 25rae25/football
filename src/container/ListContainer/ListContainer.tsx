"use client";

import * as apis from "@/apis";
import { GCommon } from "@/common/types/CommonTypes";
import List from "@/components/List/List";
import { useEffect, useState } from "react";

export default function ListContainer() {
  const [game, setGame] = useState<GCommon[]>([]);

  // 팀전체 정보 가져오기
  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await apis.getGames();
        setGame(response?.data?.item?.games);
      } catch (error) {
        console.error("게임 정보를 못불러왔습니다");
      }
    }
    fetchGames();
  }, []);

  return <List game={game} />;
}
