import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../redux/features/monthIndex.feature";
import logo from "../assets/calendar-icon.png";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "./CalendarHeader.css";
import dayjs from "dayjs";

const CalendarHeader = () => {
  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });

  let dispatch = useDispatch();

  const handlePrevMonth = () => {
    dispatch(decrement());
  };

  const handleNextMonth = () => {
    dispatch(increment());
  };


  const handleCurrentDay = () => {
    dispatch(reset());
  }

  return (
    <header className="CalendarHeader__wrapper">
      <img className="CalendarHeader__logo" src={logo} alt="logo of calendar" />
      <h1 className="CalendarHeader__title">Calendar</h1>
      <button onClick={handleCurrentDay} className="CalendarHeader__btn-today">
        Today
      </button>
      <button onClick={handlePrevMonth} className="CalendarHeader__btn-left">
        <HiChevronLeft />
      </button>
      <button onClick={handleNextMonth} className="CalendarHeader__btn-right">
        <HiChevronRight />
      </button>
      <h2 className="">
        {dayjs(new Date(dayjs().year(), monthIndex.monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
    </header>
  );
};

export default CalendarHeader;
