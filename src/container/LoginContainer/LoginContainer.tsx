"use client";

import Login from "@/components/Login/Login";
import * as apis from "@/apis";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

export default function LoginContainer() {
  const router = useRouter();
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setLoginValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  // modal창
  const handleModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  // api post 전송
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await apis.postLogin(loginValue);
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "accessToken",
            response?.data?.item?.accessToken
          );
          // dispatch(setUser(response.data.item.user));
        }
        router.push("/");
      } catch (error) {
        console.error("로그인을 실패했습니다.", error);
      }
    },
    [loginValue, router]
  );

  return (
    <Login
      handleSubmit={handleSubmit}
      handleInput={handleInput}
      handleModal={handleModal}
      showModal={showModal}
    />
  );
}

// redux ,react-query 연결해서 전역관리
