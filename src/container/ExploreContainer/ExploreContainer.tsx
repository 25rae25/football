"use client";

import Explore from "@/components/Explore/Explore";
import { useEffect, useState } from "react";

export default function ExploreContainer() {
  const [userToken, setUserToken] = useState<string | null>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserToken(localStorage.getItem("accessToken"));
    }
  }, []);

  return <Explore token={userToken} />;
}
