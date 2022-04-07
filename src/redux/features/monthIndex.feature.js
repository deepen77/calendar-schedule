import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  monthIndex: 0,
  showEventModal: false,
  daySelected: null,
  savedEvents: [],
  selectedEvent: null,
};

let monthIndexSlice = createSlice({
  name: "monthIndex",
  initialState: initialState,
  reducers: {
    getCurrentMonth: function (state, action) {
      state.monthIndex = action.payload;
    },
    increment: function (state, action) {
      state.monthIndex = state.monthIndex + 1;
    },
    decrement: function (state, action) {
      state.monthIndex = state.monthIndex - 1;
    },
    reset: function (state, action) {
      state.monthIndex = dayjs().month();
    },
    synchronize: function (state, action) {
      state.monthIndex = action.payload;
    },
    openModal: function (state, action) {
      state.showEventModal = true;
    },
    closeModal: function (state, action) {
      state.showEventModal = false;
    },
    selectDay: function (state, action) {
      state.daySelected = action.payload;
    },
    addEvent: function (state, action) {
      state.savedEvents.push(action.payload);
    },
    updateEvent: function (state, action) {
      let index = state.savedEvents.findIndex(
        (evt) => evt.id === action.payload.id
      );
      state.savedEvents.splice(index, 1, action.payload);
    },
    deleteEvent: function (state, action) {
      let index = state.savedEvents.findIndex(
        (evt) => evt.id === action.payload.id
      );
      state.savedEvents.splice(index, 1);
    },
    selectEvent: function (state, action) {
      state.selectedEvent = action.payload;
    },
  },
});
export const {
  getCurrentMonth,
  increment,
  decrement,
  reset,
  synchronize,
  changeM,
  openModal,
  closeModal,
  selectDay,
  addEvent,
  updateEvent,
  selectEvent,
  deleteEvent,
} = monthIndexSlice.actions;
export default monthIndexSlice.reducer;
