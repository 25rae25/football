"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as S from "./CalendarStyles";

export default function MyCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <S.StyleCalendar value={startDate} />
    </>
  );
}
