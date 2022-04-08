import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { labelsStatus, filterEvents } from '../redux/features/monthIndex.feature';

import "./Label.css"

const Labels = () => {

  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });


  let dispatch = useDispatch()

  function updateLabel(label) {
    console.log(label);
    dispatch(labelsStatus(label))
    dispatch(filterEvents());

  }


  return (
    <>
      <p className="">Label</p>
      {monthIndex.labels.map(({ label, checked }, idx) => (
        <label key={idx} className="Labels__labelsContainer">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ label, checked: !checked})}
            className={`${label}`}
          />
          <span className="">{label}</span>
        </label>
      ))}
    </>
  );
}

export default Labels

