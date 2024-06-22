"use client";

import * as apis from "@/apis";
import IntroduceDetail from "@/components/Introduce/IntroduceDetail";
import { useEffect } from "react";
import { Team } from "../IntroduceContainer/IntroTeamTypes";

export default function IntroduceDetailContainer({ id }: Team) {
  // useEffect(() => {
  //   async function fetchTeam() {
  //     try {
  //       const response = await apis.getTeam(teamId);
  //     } catch (error) {
  //       console.error("팀정보를 불러오지 못했습니다.");
  //     }
  //   }
  //   fetchTeam();
  // }, []);

  return <IntroduceDetail id={id} />;
}
