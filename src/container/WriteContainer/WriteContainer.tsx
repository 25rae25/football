"use client";

import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import * as apis from "@/apis";
import { useRouter } from "next/navigation";
import Write from "@/components/Write/Write";

type Props = {
  teamId: number;
};

export default function WriteContainer({ teamId }: Props) {
  const router = useRouter();
  // PreviewImg 관련 기능
  const [upload, setUpload] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [writeValue, setWriteValue] = useState({
    title: "",
    name: "",
    province: "",
    address: "",
    time: "",
    range: "",
    fee: 0,
    imageUrl: upload,
    phone: "",
    introduction: "",
  });

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setWriteValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  // PreviewImg 관련 기능
  const handleAddUpload = () => {
    fileRef.current?.click();
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setUpload(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemoveImage = () => {
    setUpload("");
  };

  // const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
  //   const imageFormData = new FormData();
  //   [].forEach.call(e.target.files, (item) => {
  //     imageFormData.append("image", item);
  //   });
  //   setUpload([...upload, imageFormData]);
  //   console.log("imageFormData ", imageFormData);
  // };

  // api post 게시글작성
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await apis.postWrite(writeValue);
        alert("게시글작성이 완료되었습니다.");
        router.push("/introduce");
      } catch (error) {
        console.error("게시글 작성이 실패했습니다.");
      }
    },
    [writeValue, router]
  );

  //팀정보 수정하기
  const handleEditSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      await apis.putTeam(teamId, writeValue);
      // router.push("/");
      console.log("teamUpdate", writeValue);
    } catch (error) {
      console.error("정보를 찾을 수 없습니다", error);
    }
  };

  return (
    <Write
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      handleAddUpload={handleAddUpload}
      handleUpload={handleUpload}
      handleRemoveImage={handleRemoveImage}
      upload={upload}
      fileRef={fileRef}
    />
  );
}
