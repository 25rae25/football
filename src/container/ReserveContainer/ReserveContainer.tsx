"use client";

import * as apis from "@/apis";
import { GCommon } from "@/common/types/CommonTypes";
import Reserve from "@/components/Reserve/Reserve";
import { useEffect, useState } from "react";

type Props = {
  gameId: number;
};

export default function ReserveContainer({ gameId }: Props) {
  const [gameData, setGameData] = useState<GCommon>({
    gameId: 0,
    stadium: "",
    address: "",
    people: "",
    shoes: "",
    time: "",
  });

  // 게임 정보 가져오기
  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await apis.getGame(gameId);
        setGameData(response.data?.item);
      } catch (error) {
        console.error("팀게임 정보가 없습니다.");
      }
    }
    fetchGame();
  }, [gameId]);

  return <Reserve gameData={gameData} />;
}
