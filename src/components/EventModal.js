import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/features/monthIndex.feature";
import { MdSchedule, MdBookmarkBorder, MdCheck, MdClose } from "react-icons/md";
import "./EventModal.css";

const labels = ["indigo", "grey", "green", "blue", "red", "purple"];

const EventModal = () => {
  let monthIndex = useSelector((state) => {
    return state["monthIndex"];
  });



  const [title, setTitle] = useState('')

  let dispatch = useDispatch();





  return (
    <div className="EventModal__container">
      <form className="EventModal__form">
        <header className="EventModal__header">
          <div>
            <button
              className="EventModal__header_btn-close"
              onClick={() => dispatch(closeModal())}
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
            <p>{monthIndex.eventDateSelected}</p>
            <span className="EventModal__content__icon-schedule">
              <MdSchedule />
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value="description in curly bracket"
              required
              className="EventModal__content-addDescription"
            />
            <span className="EventModal__content__icon-bookmark">
              <MdBookmarkBorder />
            </span>
            <div className="EventModal__content__check-container">
              {labels.map((label, i) => (
                <span key={i} className={`EventModal__content__check ${label}`}>
                  <span className="EventModal__content__check-icon">
                    <MdCheck />
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="EventModal__footer_content">
          <button type="submit" className="EventModal__footer_btn-save">
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
