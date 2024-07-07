"use client";

import * as apis from "@/apis";
import { GCommon } from "@/common/types/CommonTypes";
import Reserve from "@/components/Reserve/Reserve";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type Props = {
  gameId: number;
};

export default function ReserveContainer({ gameId }: Props) {
  const router = useRouter();
  const [gameData, setGameData] = useState<GCommon>();
  const [showModal, setShowModal] = useState(false);
  const [userToken, setUserToken] = useState<string | null>("");

  // modal창 x
  const handleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  // token
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserToken(localStorage.getItem("accessToken"));
    }
  }, []);

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

  // api join post 전송
  const handleSubmit = useCallback(async () => {
    try {
      const response = await apis.postJoinGame(gameId);
      console.log("response", response);
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "accessToken", //
          response?.data?.item?.accessToken
        );
      }
      alert("게임 예약 신청을 완료했습니다.");
      router.push("/mypage");
    } catch (error) {
      console.error("경기 참여를 실패했습니다");
      alert("게임 예약 신청을 실패했습니다.");
      // router.push("/login");
    }
  }, [gameId, router]);

  return (
    <Reserve
      gameData={gameData}
      showModal={showModal}
      handleModal={handleModal}
      handleSubmit={handleSubmit}
    />
  );
}
