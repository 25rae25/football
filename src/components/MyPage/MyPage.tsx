import * as S from "./MyPageStyles";
// import MyCalendar from "../Calendar/Calendar";
import { UCommon } from "@/common/types/CommonTypes";

type UserTypes = {
  user: UCommon;
};

export default function MyPage({ user }: UserTypes) {
  return (
    <S.MyPageWrapper>
      <S.MyPageWrap>
        <S.MyPage>
          <S.ProfileImg
            src="https://gwmbluhqzjsorxlkmsij.supabase.co/storage/v1/object/sign/soccer/avatar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb2NjZXIvYXZhdGFyLnBuZyIsImlhdCI6MTcxODkzNTYzMSwiZXhwIjoxNzUwNDcxNjMxfQ.gZRzBh0GAJ-VfqqZn5sfJ9eC30cZZ8Cp_iqb2y27pDA&t=2024-06-21T02%3A07%3A11.546Z"
            width={100}
            height={100}
            alt="이미지"
          />
          <S.PageContent>{user?.name}</S.PageContent>
          <S.PageContent>{user?.email}</S.PageContent>
        </S.MyPage>
      </S.MyPageWrap>
      <S.CalendarWrap>{/* <MyCalendar /> */}</S.CalendarWrap>
    </S.MyPageWrapper>
  );
}
