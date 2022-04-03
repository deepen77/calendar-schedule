import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const initialState = {
  monthIndex: dayjs().month(),
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
  },
});
export const { increment, decrement, reset,synchronize, changeM} = monthIndexSlice.actions;
export default monthIndexSlice.reducer;
