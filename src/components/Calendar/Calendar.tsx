import "react-calendar/dist/Calendar.css";
import * as S from "./CalendarStyles";

type Props = {
  onChnage: () => void;
  value: string;
};

export default function MyCalendar({ value }: Props) {
  return (
    <>
      <S.StyleCalendar value={value} />
    </>
  );
}
