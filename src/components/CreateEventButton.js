import React from 'react'
import {GoPlus} from "react-icons/go"
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../redux/features/monthIndex.feature';

import "./CreateEventButton.css";

const CreateEventButton = () => {

  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });

  let dispatch = useDispatch()

  return (
    <button onClick={()=>dispatch(openModal()) } className="CreateEventButton__btn">
      <GoPlus className="CreateEventButton__plusIcon" />
      <span>Create</span>
    </button>
  );
}

export default CreateEventButton