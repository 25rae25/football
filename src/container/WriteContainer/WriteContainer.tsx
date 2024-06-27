"use client";

import { ChangeEvent, FormEvent, useCallback, useRef, useState } from "react";
import * as apis from "@/apis";
import { useRouter } from "next/navigation";
import Write from "@/components/Write/Write";

export default function WriteContainer() {
  const router = useRouter();
  // PreviewImg 관련 기능
  const [upload, setUpload] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  const [writeValue, setWriteValue] = useState({
    name: "",
    province: "",
    address: "",
    time: "",
    range: "",
    fee: 0,
    imageUrl: upload,
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

  // api post
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
  console.log("writeValue", writeValue);

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
