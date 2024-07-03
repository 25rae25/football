"use client";

import * as apis from "@/apis";
import IntroduceDetail from "@/components/Introduce/IntroduceDetail";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { ICommon } from "@/common/types/CommonTypes";
import { useRouter } from "next/navigation";

type Props = {
  teamId: number;
};

export default function IntroduceDetailContainer({ teamId }: Props) {
  const [isEdit, setIsEdit] = useState(false);
  const [teamData, setTeamData] = useState<ICommon>({
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
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTeamData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  // 팀정보 불러오기
  useEffect(() => {
    async function fetchTeam() {
      if (!teamId) {
        return;
      }
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
        setUserId(response.data?.item?.id);
      } catch (error) {
        console.error("유저 정보를 못가져왔습니다");
      }
    }
    fetchUser();
  }, []);

  const handleEditSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await apis.putTeam(teamId, teamData);
      } catch (error) {
        console.error(error);
      }
    },
    [teamData, teamId]
  );

  const hadleIsEdit = useCallback(() => {
    setIsEdit((prev) => !prev);
  }, []);

  return (
    <IntroduceDetail
      teamData={teamData}
      userId={userId}
      isEdit={isEdit}
      handleInput={handleInput}
      handleEditSubmit={handleEditSubmit}
      hadleIsEdit={hadleIsEdit}
    />
  );
}

// 유저정보 id랑 authid 비교해서 수정하기 버튼나오게
// teamData 값나오게하고 거기서 수정 하고 update 로넘기기
