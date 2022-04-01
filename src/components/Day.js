import React from 'react'
import dayjs from 'dayjs';

import './Day.css'

const Day = ({day, rowIdx}) => {

    const highlightCurrentDay = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "Day__number-higlighted" : ""
    }

  return (
    <div className="Day__wrapper">
      <header className="Day__header">
          {rowIdx === 0 && <p>{day.format("ddd")}</p>}

        <p className={`Day__number ${highlightCurrentDay()}`}>{day.format("DD")}</p>
      </header>
    </div>
  );
}

export default Day