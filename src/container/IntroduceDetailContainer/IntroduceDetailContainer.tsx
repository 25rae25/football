"use client";

import * as apis from "@/apis";
import IntroduceDetail from "@/components/Introduce/IntroduceDetail";
import { useEffect, useState } from "react";
import { Team } from "../IntroduceContainer/IntroTeamTypes";
import { useRouter } from "next/navigation";
import { ICommon } from "@/common/types/CommonTypes";

type Props = {
  teamId: number;
};

export default function IntroduceDetailContainer({ teamId }: Props) {
  // id값으로 데이터를 불러와라
  const [teamData, setTeamData] = useState<ICommon>({
    teamId: 0,
    name: "",
    province: "",
    address: "",
    time: "",
    range: "",
    fee: 0,
    imageUrl: "",
    phone: "",
    introduction: "",
  });

  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await apis.getTeam(teamId);
        setTeamData(response.data.item);
      } catch (error) {
        console.error("정보를 못 불러왔습니다", error);
      }
    }
    fetchTeam();
  }, [teamId]);

  console.log(teamData);
  return <IntroduceDetail teamData={teamData} />;
}
