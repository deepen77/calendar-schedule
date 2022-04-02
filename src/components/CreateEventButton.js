import React from 'react'
import {GoPlus} from "react-icons/go"

import "./CreateEventButton.css";

const CreateEventButton = () => {
  return (
    <button className="CreateEventButton__btn">
      <GoPlus className="CreateEventButton__plusIcon" />
      <span>Create</span>
    </button>
  );
}

export default CreateEventButton