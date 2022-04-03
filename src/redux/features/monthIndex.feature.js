import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  monthIndex: dayjs().month(),
  showEventModal: false,
  daySelected: dayjs().format(),
  eventDateSelected: dayjs().format("dddd, MMMM DD"),
};

let monthIndexSlice = createSlice({
  name: "monthIndex",
  initialState: initialState,
  reducers: {
    increment: function (state, action) {
      state.monthIndex = state.monthIndex + 1;
      //console.log(state.monthIndex);
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
    selectDate: function (state, action) {
      state.eventDateSelected = action.payload;
    },
  },
});
export const { increment, decrement, reset,synchronize, changeM, openModal, closeModal, selectDay, selectDate} = monthIndexSlice.actions;
export default monthIndexSlice.reducer;
