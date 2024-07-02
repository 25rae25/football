"use client";

import * as apis from "@/apis";
import Reserve from "@/components/Reserve/Reserve";
import { useEffect } from "react";

type Props = {
  gameId: number;
};

export default function ReserveContainer({ gameId }: Props) {
  // 게임 정보 가져오기
  useEffect(() => {
    async function fetchGame() {
      try {
        const response = await apis.getGame(gameId);
      } catch (error) {
        console.error("팀게임 정보가 없습니다.");
      }
    }
    fetchGame();
  }, [gameId]);

  return <Reserve />;
}
