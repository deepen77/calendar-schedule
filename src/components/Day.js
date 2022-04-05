import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { selectDay, openModal} from '../redux/features/monthIndex.feature';

import './Day.css'
import { useDispatch, useSelector } from 'react-redux';

const Day = ({day, rowIdx}) => {

  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });


  let dispatch = useDispatch();



const [dayEvents, setDayEvents] = useState([])

  const daySelect = (day) => {
    dispatch(selectDay(day.valueOf()));
  };

    const highlightCurrentDay = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? "Day__number-higlighted" : ""
    }

    useEffect(() => {
      const events = monthIndex.savedEvents.filter(

        (evt) => {
          console.log("data:", (dayjs(evt.day).format("DD-MM-YY")));
         return dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
        });
      setDayEvents(events);


    }, [monthIndex.savedEvents, day]);


  return (
    <div
      onClick={() => {
        daySelect(day);
        dispatch(openModal());
      }}
      className="Day__wrapper"
    >
      <header className="Day__header">
        {rowIdx === 0 && <p>{day.format("ddd")}</p>}

        <p className={`Day__number ${highlightCurrentDay()}`}>
          {day.format("DD")}
        </p>
      </header>
      {dayEvents.map((evt, id) => (
        <div className={evt.selectedLabel} key={evt.id}>
          {evt.title}
        </div>
      ))}
    </div>
  );
}

export default Day