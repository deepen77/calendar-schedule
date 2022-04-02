import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { getMonth } from "./utils/utils";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import './SmallCalendar.css'


const SmallCalendar = () => {

    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);


  return (
    <div className="">
      <header className="">
        <p className="">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          <button className="SmallCalendar__btn-left">
            <HiChevronLeft />
          </button>
          <button className="SmallCalendar__btn-left">
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
              <button className="SmallCalendar__btn-day" key={idx}>
                <span className="">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SmallCalendar

