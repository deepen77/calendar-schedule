import React, {useState} from 'react';
import './App.css';
import MainCalendar from './components/MainCalendar';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import {getMonth} from './components/utils/utils'

function App() {

  const [currentMonth, setCurrentMonth] = useState(getMonth());

  console.log(getMonth(7))
  return (
    <>
      <div>
        <MainCalendar />
        <div>
          <Sidebar />
          <Month month={currentMonth}/>
        </div>
      </div>
    </>
  );
}

export default App;
