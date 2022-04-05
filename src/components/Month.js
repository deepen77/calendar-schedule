import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Day from "./Day";

import './Month.css'

const Month = ({ month }) => {

  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });

  let dispatch = useDispatch();
  return (
    <div className="Month__wrapper">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
      {monthIndex.savedEvents.map((evt, id) => (
        <div className={evt.selectedLabel} key={evt.id}>
          {evt.title}
        </div>
      ))}
    </div>
  );
};

export default Month;
