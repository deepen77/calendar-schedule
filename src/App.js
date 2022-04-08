import React, { useEffect, useMemo, useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./components/utils/utils";
import { useDispatch, useSelector } from "react-redux";
import EventModal from "./components/EventModal";
import {getCurrentMonth} from "./redux/features/monthIndex.feature"
import dayjs from "dayjs";

function App() {

  // const [labels, setLabels] = useState([]);

  // console.log("labels:",labels)





  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });

  console.log("monthIndex:", monthIndex.monthIndex);
  console.log("eventModal:", monthIndex.showEventModal);
  console.log("daySelected:", monthIndex.daySelected);
  console.log("savedEvents", monthIndex.savedEvents);
  console.log("selectedEvent", monthIndex.selectedEvent);
  console.log("labels", monthIndex.labels);
  console.log("filtered", monthIndex.filteredEvents);


  let dispatch = useDispatch()

  const [currentMonth, setCurrentMonth] = useState(
    getMonth()
  );

  console.log(currentMonth)



useEffect(() => {
  dispatch(getCurrentMonth(dayjs().month()))
},[dispatch])

// useEffect(() => {
//   dispatch(getLabels());
// }, [monthIndex.savedEvents, dispatch]);


  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex.monthIndex));
  }, [monthIndex.monthIndex]);


  return (
    <>
      {monthIndex.showEventModal && <EventModal />}
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
