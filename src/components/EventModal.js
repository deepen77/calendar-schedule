import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeModal,
  addEvent,
  updateEvent,
  selectEvent
} from "../redux/features/monthIndex.feature";
import { MdSchedule, MdBookmarkBorder, MdCheck, MdClose } from "react-icons/md";
import "./EventModal.css";
import { uid } from "./utils/uid";
import dayjs from "dayjs";


const labels = ["indigo", "grey", "green", "blue", "red", "purple"];

const EventModal = () => {
  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });



  const [title, setTitle] = useState(monthIndex.selectedEvent ? monthIndex.selectedEvent.title : "" );
  const [description, setDescription] = useState(
    monthIndex.selectedEvent ? monthIndex.selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    monthIndex.selectedEvent
      ? monthIndex.selectedEvent.selectedLabel
      : labels[0]
  );


  console.log(selectedLabel);


  let dispatch = useDispatch();

function handleSubmit(e) {
  e.preventDefault()
  const calendarEvent = {
    title,
    description,
    selectedLabel,
    //day: monthIndex.daySelected,
    day: monthIndex.selectedEvent
      ? monthIndex.selectedEvent.day
      : monthIndex.daySelected,
    id: monthIndex.selectedEvent ? monthIndex.selectedEvent.id : uid(),
  };
  if (monthIndex.selectedEvent) {
    dispatch(updateEvent(calendarEvent));
  } else {
  dispatch(addEvent(calendarEvent))
  }
  dispatch(closeModal())
  dispatch(selectEvent(null));
}



  return (
    <div className="EventModal__container">
      <form className="EventModal__form">
        <header className="EventModal__header">
          <div>
            <button
              className="EventModal__header_btn-close"
              onClick={() => {
                dispatch(closeModal());
                dispatch(selectEvent(null));
              }}
            >
              <MdClose />
            </button>
          </div>
        </header>
        <div className="EventModal__content">
          <div className="EventModal__content-grid">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="EventModal__content-addTitle"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="EventModal__content__icon-schedule">
              <MdSchedule />
            </span>
            <p>
              {monthIndex.selectedEvent
                ? dayjs(monthIndex.selectedEvent.day).format("dddd, MMMM D, YYYY")
                : dayjs(monthIndex.daySelected).format("dddd, MMMM D, YYYY")}
              {/* {dayjs(monthIndex.daySelected).format("dddd, MMMM D, YYYY")} */}
            </p>
            <span className="EventModal__content__icon-schedule">
              <MdSchedule />
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="EventModal__content-addDescription"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="EventModal__content__icon-bookmark">
              <MdBookmarkBorder />
            </span>
            <div className="EventModal__content__check-container">
              {labels.map((label, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(label)}
                  className={`EventModal__content__check ${label}`}
                >
                  {selectedLabel === label && (
                    <span className="EventModal__content__check-icon">
                      <MdCheck />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="EventModal__footer_content">
          <button
            type="submit"
            onClick={handleSubmit}
            className="EventModal__footer_btn-save"
          >
            {monthIndex.selectedEvent ? "Update": "Save" }
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
