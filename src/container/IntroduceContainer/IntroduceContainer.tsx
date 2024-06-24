"use client";

import * as apis from "@/apis";
import Introduce from "@/components/Introduce/Introduce";
import { useEffect, useState } from "react";
import { ITeam } from "./IntroTeamTypes";

export default function IntroduceContainer() {
  const [teams, setTeams] = useState<ITeam[]>([]);

  useEffect(() => {
    async function fetchTeams() {
      try {
        const response = await apis.getTeams();
        console.log("response", response);
        setTeams(response?.data?.item?.teams);
      } catch (error) {
        console.error("팀정보를 불러오지 못했습니다.");
      }
    }
    fetchTeams();
  }, []);
  console.log("teams", teams);

  return <Introduce teams={teams} />;
}
