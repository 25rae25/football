import styled from "@emotion/styled";
import Calendar from "react-calendar";

export const StyleCalendar = styled(Calendar)`
  width: 100%;

  .react-calendar {
    width: 100%;
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
