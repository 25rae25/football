"use client";
import MyPage from "@/components/MyPage/MyPage";
import * as apis from "@/apis";
import { useEffect, useState } from "react";
import { UCommon } from "@/common/types/CommonTypes";

export default function MyPageContainer() {
  const [user, setUser] = useState<UCommon>();

  //유저 정보 가져오기
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await apis.getUser();
        setUser(response.data?.item);
      } catch (error) {
        console.error("유저 정보를 못가져왔습니다");
      }
    }
    fetchUser();
  }, []);

  return <MyPage user={user} />;
}
