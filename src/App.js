import React, {useState} from 'react';
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import {getMonth} from './components/utils/utils'

function App() {

  const [currentMonth, setCurrentMonth] = useState(getMonth());

  console.log(getMonth(7))
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
