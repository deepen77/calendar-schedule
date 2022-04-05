import React from 'react'
import CreateEventButton from './CreateEventButton'
import Labels from './Labels'
import './Sidebar.css'
import SmallCalendar from './SmallCalendar'

const Sidebar = () => {


  return (
    <>
      <aside className="Sidebar__container">
        <CreateEventButton />
        <SmallCalendar />
        <Labels />
      </aside>

    </>
  );
}

export default Sidebar