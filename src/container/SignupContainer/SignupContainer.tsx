"use client";

import Signup from "@/components/Signup/Signup";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import * as apis from "@/apis";
import { useRouter } from "next/navigation";

export default function SignupContainer() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });

  // 에러 메세지
  const [emailMessage, setEmailMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const handleInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  // 이메일 설정
  useEffect(() => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (inputValue?.email.length === 0) {
      setEmailMessage("");
      setIsEmail(false);
    }
    if (!emailRegex.test(inputValue?.email) && inputValue?.email.length !== 0) {
      setEmailMessage("이메일 형식이 틀렸습니다. 다시 확인해 주세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  }, [inputValue?.email]);

  // 이름 설정
  useEffect(() => {
    if (inputValue?.name.length < 2 || inputValue?.name.length >= 5) {
      setNameMessage("이름 형식이 툴렸습니다. 다시 확인해 주세요.");
    } else {
      setNameMessage("");
      setIsName(true);
    }
    if (inputValue?.name.length === 0) {
      setNameMessage("");
      setIsName(false);
    }
  }, [inputValue?.name]);

  // 비밀번호 설정
  useEffect(() => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

    if (!passwordRegex.test(inputValue.password)) {
      setPasswordMessage(
        "숫자, 영문자, 특수문자 조합으로 8자리 이상 해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
    if (inputValue?.password.length === 0) {
      setPasswordMessage("");
      setIsPassword(false);
    }
  }, [inputValue.password]);

  // 비밀번호 확인
  useEffect(() => {
    if (inputValue.password === inputValue.passwordConfirm) {
      setPasswordConfirmMessage("");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호를 확인해주세요");
      setIsPasswordConfirm(false);
    }
  }, [inputValue.passwordConfirm]);

  // backend 전송
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await apis.postSignup(inputValue);
        alert("회원가입 완료되었습니다.");
        router.push("/login");
      } catch (error) {
        console.error("가입을 실패했습니다.");
      }
    },
    [inputValue]
  );

  return (
    <Signup
      isEmail={isEmail}
      isName={isName}
      isPassword={isPassword}
      isPasswordConfirm={isPasswordConfirm}
      emailMessage={emailMessage}
      nameMessage={nameMessage}
      passwordMessage={passwordMessage}
      passwordConfirmMessage={passwordConfirmMessage}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
  );
}
