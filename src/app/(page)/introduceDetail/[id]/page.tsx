"use client";

import IntroduceDetailContainer from "@/container/IntroduceDetailContainer/IntroduceDetailContainer";
import * as apis from "@/apis";
import { useEffect, useState } from "react";
import { ITeam } from "@/container/IntroduceContainer/IntroTeamTypes";
import IntroduceDetail from "@/components/Introduce/IntroduceDetail";

type Props = {
  params: { id: number };
};

export default function IntroduceDetailPage({ params }: Props) {
  const [teams, setTeams] = useState<ITeam[]>();
  const id = params.id;

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await apis.getTeam(id);
        setTeams(teams);
      } catch (error) {
        console.error("정보를 못 불러왔습니다", error);
      }
    }
    fetchTeam();
  }, [id, teams]);

  return (
    <>
      <IntroduceDetailContainer id={id} />
    </>
  );
}
