import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  monthIndex: 0,
  showEventModal: false,
  daySelected: null,
  savedEvents: [],
  selectedEvent: null,
  labels: [],
  filteredEvents: []
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
    getLabels: function (state, action) {
      state.labels = [
        ...new Set(state.savedEvents.map((evt) => evt.selectedLabel)),
      ].map((label) => {
        return {
          label,
           checked: true,
        };
      });
    },
    labelsStatus: function (state, action) {
      let index = state.labels.findIndex(
        (evt) => evt.label === action.payload.label
      );
      state.labels.splice(index, 1, action.payload);
    },
    verifyStatus: function (state, action) {
      state.labels = state.labels.filter((lbl) => {
        return state.filteredEvents.find((evt) => lbl.label === evt.selectedLabel && lbl.checked )
      })
    },
    filterEvents: function (state, action) {
      state.filteredEvents = state.savedEvents.filter((evt) =>
        state.labels.find(
          (lbl) => evt.selectedLabel === lbl.label && lbl.checked
        )
      );
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
  getLabels,
  labelsStatus,
  filterEvents,
  verifyStatus
} = monthIndexSlice.actions;
export default monthIndexSlice.reducer;
