"use client";

import IntroduceDetailContainer from "@/container/IntroduceDetailContainer/IntroduceDetailContainer";
import * as apis from "@/apis";
import { useEffect, useState } from "react";
import { ITeam } from "@/container/IntroduceContainer/IntroTeamTypes";
import IntroduceDetail from "@/components/Introduce/IntroduceDetail";

type Props = {
  params: { teamId: number };
};

export default function IntroduceDetailPage({ params }: Props) {
  const teamId = params.teamId;

  return (
    <>
      <IntroduceDetailContainer teamId={teamId} />
    </>
  );
}
