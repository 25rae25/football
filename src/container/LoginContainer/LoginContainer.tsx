"use client";

import Login from "@/components/Login/Login";
import * as apis from "@/apis";
import { FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginContainer() {
  const router = useRouter();
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  // api post 전송
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await apis.postLogin(loginValue);
        console.log("response", response);
        // localStorage.setItem('accessToken', accessToken)
        router.push("/");
      } catch (error) {
        console.error("로그인을 실패했습니다.");
      }
    },
    [loginValue]
  );

  return <Login handleSubmit={handleSubmit} />;
}
