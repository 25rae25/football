"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import * as S from "./CalendarStyles";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function MyCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      <S.StyleCalendar locale="ko" onChange={onChange} value={value} />
    </>
  );
}
