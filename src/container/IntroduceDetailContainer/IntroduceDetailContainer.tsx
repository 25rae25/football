"use client";

import * as apis from "@/apis";
import IntroduceDetail from "@/components/Introduce/IntroduceDetail";
import { useEffect, useState } from "react";
import { Team } from "../IntroduceContainer/IntroTeamTypes";
import { useRouter } from "next/navigation";

type Props = {
  teamId: number;
};

export default function IntroduceDetailContainer({ teamId }: Props) {
  // id값으로 데이터를 불러와라
  const [teamData, setTeamData] = useState({});

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await apis.getTeam(teamId);
        console.log(response);
        // setTeamData(response);
      } catch (error) {
        console.error("정보를 못 불러왔습니다", error);
      }
    }
    fetchTeam();
  }, [teamId]);

  return <IntroduceDetail />;
}
