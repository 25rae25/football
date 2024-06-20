"use client";

import * as apis from "@/apis";
import Introduce from "@/components/Introduce/Introduce";
import { useEffect, useState } from "react";
import { TeamTypes } from "./IntroTeamTypes";

export default function IntroduceContainer() {
  const [teams, setTeams] = useState<TeamTypes[]>([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await apis.getTeams();
        setTeams(response?.data?.item?.teams);
        console.log("response", response);
      } catch (error) {
        console.error("팀정보를 불러오지 못했습니다.");
      }
    }
    fetchTeams();
  }, []);

  return (
    <>
      {/* 여기에 반복문인가용?? */}
      {teams?.map((teams) => (
        <Introduce key={teams.id} />
      ))}
    </>
  );
}
