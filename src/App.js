import React, { useEffect, useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./components/utils/utils";
import { useDispatch, useSelector } from "react-redux";
import EventModal from "./components/EventModal";

function App() {
  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });

  console.log("monthIndex:", monthIndex.monthIndex);
  console.log("eventModal:", monthIndex.showEventModal);
  console.log("daySelected:", monthIndex.daySelected);
  console.log("eventDateSelected", monthIndex.eventDateSelected);

  let dispatch = useDispatch()

  const [currentMonth, setCurrentMonth] = useState(
    getMonth(monthIndex.monthIndex)
  );




  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex.monthIndex));
  }, [monthIndex.monthIndex]);

  return (
    <>
       {monthIndex.showEventModal && <EventModal/>}
      <div>
        <CalendarHeader />
        <div className="App__sidebar__month-container">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}

export default App;
