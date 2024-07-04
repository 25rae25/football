import styled from "@emotion/styled";
import Calendar from "react-calendar";

export const StyleCalendar = styled(Calendar)`
  width: 100%;

  .react-calendar {
    width: 100%;
  }

  .react-calendar__month-view__weekdays {
    abbr {
      // 텍스트 부분
      font-size: 18px;
      font-weight: 900;
    }
  }

  .react-calendar__tile {
    text-align: center;
    height: 60px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  /*hover, focus, 선택됐을 시 */
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus,
  .react-calendar__tile--active {
    background: #1570ff;
    border-radius: 14px;
    padding: 20px 0;
  }

  .react-calendar__navigation {
    width: inherit;
    height: 3.5rem;
    display: flex;
    text-align: center;
    align-items: center;
    padding: 0 5.5rem;

    .react-calendar__navigation__label {
      width: 5.5rem;
      height: 1.375rem;
      font-size: 16px;
      border: none;
      font-weight: 700;
      background-color: #fff;
    }

    .react-calendar__navigation__prev-button {
      border: none;
      background-color: #fff;
      cursor: pointer;
      opacity: 0;
    }
  }
`;
