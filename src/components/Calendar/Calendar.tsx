"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function MyCalendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Calendar value={startDate} />
    </>
  );
}
// onChange={setStartDate}
