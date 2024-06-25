"use client";

import Login from "@/components/Login/Login";
import * as apis from "@/apis";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginContainer() {
  const router = useRouter();
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLoginValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);
  console.log(loginValue);

  // api post 전송
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await apis.postLogin(loginValue);
        localStorage.setItem("accessToken", response?.data?.item?.accessToken);
        console.log("resposnse", response.data.item);
        // router.push("/");
      } catch (error) {
        console.error("로그인을 실패했습니다.");
      }
    },
    [loginValue]
  );

  return <Login handleSubmit={handleSubmit} handleInput={handleInput} />;
}

// redux ,react-query 연결해서 전역관리
