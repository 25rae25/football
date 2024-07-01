"use client";

import FindId from "@/components/FindId/FindId";
import { ChangeEvent, useCallback, useState } from "react";

export default function FindIdContainer() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleCloseModal = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  const handleEmailSubmit = useCallback(() => {
    setEmail("");
  }, []);

  return (
    <FindId
      handleCloseModal={handleCloseModal}
      handleEmailSubmit={handleEmailSubmit}
    />
  );
}
