import Write from "@/components/Write/Write";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import * as apis from "@/apis";
import { useRouter } from "next/router";

export default function WriteContainer(teamId: number) {
  const router = useRouter();
  const [writeValue, setWriteValue] = useState({
    teamId,
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
        await apis.postWrite(teamId, writeValue);
        alert("게시글작성이 완료되었습니다.");
        router.push("/");
      } catch (error) {
        console.log("게시글 작성이 실패했습니다.");
      }
    },
    [teamId, writeValue, router]
  );

  return <Write handleInput={handleInput} handleSubmit={handleSubmit} />;
}
