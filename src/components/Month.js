import React from "react";
import Day from "./Day";

const Month = ({ month }) => {
  return (
    <div>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, i) => (
            <Day day={day} key={i} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
