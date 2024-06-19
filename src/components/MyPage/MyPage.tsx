"use client";

import * as S from "./MyPageStyles";
import MyCalendar from "../Calendar/Calendar";

export default function MyPage() {
  return (
    <S.MyPageWrapper>
      <MyCalendar />
    </S.MyPageWrapper>
  );
}
