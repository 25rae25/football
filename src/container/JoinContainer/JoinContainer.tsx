"use client";

import * as apis from "@/apis";
import Join from "@/components/Join/Join";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function JoinContainer({ gameId }) {
  const router = useRouter();
  const [userToken, setUserToken] = useState<string | null>("");

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
  }, []);

  return <Join />;
}
