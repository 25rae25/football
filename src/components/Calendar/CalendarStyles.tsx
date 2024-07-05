import styled from "@emotion/styled";
import Calendar from "react-calendar";

export const StyleCalendar = styled(Calendar)`
  width: 100%;
  border: none;
  background-color: #fff;

  .react-calendar {
  }

  /* 년-월 */
  .react-calendar__navigation__label > span {
    color: #000;
    font-size: 20px;
    font-weight: bold;
    line-height: 140%;
  }

  .react-calendar__navigation button:enabled:hover {
    color: #fff !important;
    width: 5px;
    background-color: #1570ff;
    border-radius: 3px;
  }

  .react-calendar__month-view__weekdays__weekday--weekend {
    color: #000;
  }

  /* 요일 */
  .react-calendar__month-view__weekdays__weekday {
    color: #000;
    font-size: 18px;
    text-decoration: none !important;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .react-calendar__month-view__weekdays__weekday abbr {
    text-decoration: none !important;
  }

  .react-calendar__tile.saturday {
    color: #6560ff;
  }

  .react-calendar__tile.sunday {
    color: red;
  }

  .react-calendar__month-view__days__day--weekend {
    color: #000;
    font-size: 18px;
    width: 44px;
    height: 44px;
    text-align: center;
  }

  /* 이번 달 일자 */
  .react-calendar__tile {
    color: #000;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: #fff;
  }

  /* 저번 달 & 다음 달 일자 */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #000;
    font-size: 18px;
    font-weight: 400;
    width: 44px;
    height: 44px;
  }

  /* 오늘 날짜 */
  .react-calendar__tile--now {
    background-color: #292929;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    border-radius: 50px;
  }

  /* 선택된 날짜의 배경색 변경 */
  .react-calendar__tile--active {
    background-color: #1570ff;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    border-radius: 50px;
  }

  .react-calendar__tile--hasActive {
    background: #1570ff;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #1570ff;
  }
`;
