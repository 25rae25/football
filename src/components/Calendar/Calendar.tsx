"use client";

import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import * as S from "./CalendarStyles";

export default function MyCalendar() {
  const [value, onChange] = useState(new Date()); // 초기값은 현재 날짜
  return (
    <>
      <S.StyleCalendar value={value} />
    </>
  );
}
