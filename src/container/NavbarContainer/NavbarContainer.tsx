"use client";

import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";

export default function NavbarContainer() {
  const [userToken, setUserToken] = useState<string | null>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
  };

  return <Navbar token={userToken} handleLogout={handleLogout} />;
}
