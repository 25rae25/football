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
    authorId: 0,
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

  // 팀정보 불러오기
  useEffect(() => {
    async function fetchTeam() {
      try {
        const response = await apis.getTeam(teamId);
        setTeamData(response.data?.item);
      } catch (error) {
        console.error("정보를 못 불러왔습니다", error);
      }
    }
    fetchTeam();
  }, [teamId]);

  //유저 정보 가져오기
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await apis.getUser();
        // const authorId = response.data?.item?.id;
        // console.log("authorId", authorId);
      } catch (error) {
        console.error("유저 정보를 못가져왔습니다");
      }
    }
    fetchUser();
  }, []);

  return <IntroduceDetail teamData={teamData} />;
}

// 유저정보 id랑 authid 비교해서 수정하기 버튼나오게
// teamData 값나오게하고 거기서 수정 하고 update 로넘기기
