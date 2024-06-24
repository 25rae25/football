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
  const teamId = params.id;

  return (
    <>
      <IntroduceDetailContainer teamId={teamId} />
    </>
  );
}
