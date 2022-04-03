import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getMonth } from "./utils/utils";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import {
  synchronize, selectDay, selectDate
} from "../redux/features/monthIndex.feature";
import { useDispatch, useSelector } from "react-redux";
import "./SmallCalendar.css";

const SmallCalendar = () => {
  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });


  let dispatch = useDispatch();


  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  // const [daySelected, setDaySelected] = useState("")


  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex.monthIndex);
  }, [monthIndex.monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);

  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  const highlightCurrentDay = (day) => {
    //console.log(day.format("DD-MM-YY"));
    if (dayjs().format("DD-MM-YY") === day.format("DD-MM-YY")) {
      return "Day__number-higlighted";
    } else {
      return "";
    }
  };


const daySelect = (day) => {
   console.log(day.format("DD-MM-YY"));
   dispatch(selectDay(day.format("DD-MM-YY")));
   dispatch(selectDate(day.format("dddd, MMMM DD")));
}





  const handlMonthMainCalendar = () => {
  dispatch(synchronize(currentMonthIdx));
  }

  return (
    <div className="">
      <header className="">
        <p className="">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <button onClick={handlePrevMonth} className="SmallCalendar__btn-left">
            <HiChevronLeft />
          </button>
          <button
            onClick={handleNextMonth}
            className="SmallCalendar__btn-right"
          >
            <HiChevronRight />
          </button>
        </div>
      </header>
      <div className="SmallCalendar__calendar">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="SmallCalendar__week">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                // onClick={handlMonthMainCalendar}
                onClick={() => {
                  handlMonthMainCalendar();
                  daySelect(day);
                }}
                className="SmallCalendar__btn-day"
                key={idx}
              >
                <span
                  className={`Day__number ${highlightCurrentDay(day)}  ${
                    monthIndex.daySelected === day.format("DD-MM-YY")
                      ? "Day__number-selected"
                      : ""
                  }`}
                >
                  {day.format("D")}
                </span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SmallCalendar;
