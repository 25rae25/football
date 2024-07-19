"use client";

import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";

export default function NavbarContainer() {
  const [userToken, setUserToken] = useState<string | null>("");
  const [text, setText] = useState("");
  // const [search, setSearch] = useState()

  const handleChnage = (e) => {
    console.log("e", e.target.value);
    setText(e.target.value);
  };

  const handleSearch = () => {};

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <Navbar
      token={userToken}
      handleLogout={handleLogout}
      handleChnage={handleChnage}
    />
  );
}
