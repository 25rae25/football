"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import * as apis from "@/apis";
import { useRouter } from "next/navigation";
import Write from "@/components/Write/Write";

export default function WriteContainer() {
  const router = useRouter();

  const [writeValue, setWriteValue] = useState({
    name: "",
    province: "",
    address: "",
    time: "",
    range: "",
    fee: 0,
    imageUrl: "",
    phone: "",
    introduction: "",
    title: "",
  });

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setWriteValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await apis.postWrite(writeValue);
        alert("게시글작성이 완료되었습니다.");
        router.push("/");
      } catch (error) {
        console.log("게시글 작성이 실패했습니다.");
      }
    },
    [writeValue, router]
  );

  return <Write handleInput={handleInput} handleSubmit={handleSubmit} />;
}
