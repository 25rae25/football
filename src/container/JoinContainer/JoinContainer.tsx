"use client";

import * as apis from "@/apis";
import Join from "@/components/Join/Join";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

type Props = {
  gameId: number;
  handleModal: () => void;
};

export default function JoinContainer({ gameId }: Props) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [userToken, setUserToken] = useState<string | null>("");

  // 닫기
  const handleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  // token
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserToken(localStorage.getItem("accessToken"));
    }
  }, []);

  // api join post 전송
  const handleSubmit = useCallback(async () => {
    try {
      const response = await apis.postJoinGame(gameId);
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "accessToken",
          response?.data?.item?.accessToken
          //   router.push("/");
        );
      }
    } catch (error) {
      console.error("경기 참여를 실패했습니다");
    }
  }, [gameId]);

  return <Join handleModal={handleModal} />;
}
