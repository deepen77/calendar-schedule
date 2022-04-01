import React from 'react'

const Day = ({day}) => {
  return (
    <div>
      <header>
        <p>{day.format("ddd")}</p>
        <p>{day.format("DD")}</p>
      </header>
    </div>
  );
}

export default Day