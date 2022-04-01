import React from 'react'
import logo from '../assets/calendar-icon.png'
import {HiChevronLeft, HiChevronRight } from "react-icons/hi";
import './CalendarHeader.css'


const CalendarHeader = () => {
  return (
    <header className="CalendarHeader__wrapper">
      <img className="CalendarHeader__logo" src={logo} alt="logo of calendar" />
      <h1 className="CalendarHeader__title">Calendar</h1>
      <button className="CalendarHeader__btn-today">Today</button>
      <button className="CalendarHeader__btn-left">
        <HiChevronLeft />
      </button>
      <button className="CalendarHeader__btn-right">
        <HiChevronRight />
      </button>
    </header>
  );
}

export default CalendarHeader