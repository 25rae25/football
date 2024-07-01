"use client";

import * as apis from "@/apis";
import IntroduceDetail from "@/components/Introduce/IntroduceDetail";
import { FormEvent, useEffect, useState } from "react";
import { ICommon } from "@/common/types/CommonTypes";
import { useRouter } from "next/navigation";

type Props = {
  teamId: number;
};

export default function IntroduceDetailContainer({ teamId }: Props) {
  const router = useRouter();
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
  const [userToken, setUserToken] = useState<string | null>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserToken(localStorage.getItem("accessToken"));
    }
  }, []);

  //팀정보 수정하기
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await apis.putTeam(teamId, teamData);
      router.push("/");
      console.log("teamUpdate", teamData);
    } catch (error) {
      console.error("정보를 찾을 수 없습니다", error);
    }
  };

  // 팀정보 불러오기
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

  return (
    <IntroduceDetail
      teamData={teamData}
      token={userToken}
      handleSubmit={handleSubmit}
    />
  );
}
