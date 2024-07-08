// "use client";

// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import * as S from "./CalendarStyles";
// import moment from "moment";

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

// export default function MyCalendar() {
//   const [value, onChange] = useState<Value>(new Date());

//   const tileClassName = ({ date }) => {
//     if (date.getDay() === 0) {
//       return "sunday";
//     }
//     if (date.getDay() === 6) {
//       return "saturday";
//     }
//     return "";
//   };
//   return (
//     <>
//       <S.StyleCalendar
//         locale="ko"
//         onChange={onChange}
//         tileClassName={tileClassName}
//         value={value}
//         calendarType="gregory"
//         view="month"
//         // formatDay={(locale, date) => moment(date).format("DD")}
//         prev2Label={null}
//         next2Label={null}
//       />
//       <Calendar
//         locale="ko"
//         // formatDay={(locale, date) => moment(date).format("DD")}
//         prev2Label={null}
//         next2Label={null}
//         calendarType="gregory"
//         view="month"
//       />
//     </>
//   );
// }
