import React from 'react'
import dayjs from 'dayjs';
import { selectDate, selectDay, openModal } from '../redux/features/monthIndex.feature';

import './Day.css'
import { useDispatch, useSelector } from 'react-redux';

const Day = ({day, rowIdx}) => {

  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });

  let dispatch = useDispatch();

  const daySelect = (day) => {
    //console.log(day.format("DD-MM-YY"));
    dispatch(selectDay(day.format("DD-MM-YY")));
    dispatch(selectDate(day.format("dddd, MMMM DD")));
  };

    const highlightCurrentDay = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "Day__number-higlighted" : ""
    }




  return (
    <div
      onClick={() => {
        daySelect(day);
        dispatch(openModal())
      }}
      className="Day__wrapper"
    >
      <header className="Day__header">
        {rowIdx === 0 && <p>{day.format("ddd")}</p>}

        <p className={`Day__number ${highlightCurrentDay()}`}>
          {day.format("DD")}
        </p>
      </header>
    </div>
  );
}

export default Day