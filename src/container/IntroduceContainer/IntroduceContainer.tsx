"use client";

import * as apis from "@/apis";
import Introduce from "@/components/Introduce/Introduce";
import { useEffect } from "react";

export default function IntroduceContainer() {
  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await apis.getTeams();
        console.log(response, "response");
      } catch (error) {
        console.error("팀정보를 불러오지 못했습니다.");
      }
    }
    fetchTeams();
  }, []);

  return <Introduce />;
}
