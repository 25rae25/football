"use client";

import Navbar from "@/components/Navbar/Navbar";

export default function NavbarContainer() {
  const token = localStorage.getItem("accessToken");
  const loseToken = console.log("token", token);

  const handleLogout = () => {
    localStorage.clear();
  };

  return <Navbar token={token} handleLogout={handleLogout} />;
}
