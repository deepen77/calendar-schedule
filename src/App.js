import React, {useEffect, useState} from 'react';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import {getMonth} from './components/utils/utils'
import { useDispatch, useSelector } from "react-redux";

function App() {

  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });

  const [currentMonth, setCurrentMonth] = useState(getMonth(monthIndex.monthIndex));



  console.log("app:", monthIndex.monthIndex)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex.monthIndex));
  }, [monthIndex.monthIndex]);



  return (
    <>
      <div>
        <CalendarHeader />
        <div className="App__sidebar__month-container">
          <Sidebar />
          <Month month={currentMonth}/>
        </div>
      </div>
    </>
  );
}

export default App;
