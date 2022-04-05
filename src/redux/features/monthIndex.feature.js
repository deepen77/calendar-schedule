import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  monthIndex: 0,
  showEventModal: false,
  daySelected: null,
  savedEvents: [],
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
      state.savedEvents.map((evt) =>
        evt.id === action.payload.id ? action.payload : evt
      );
    },
    deleteEvent: function (state, action) {
      state.savedEvents.filter((evt) => evt.id !== action.payload.id);
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
} = monthIndexSlice.actions;
export default monthIndexSlice.reducer;
