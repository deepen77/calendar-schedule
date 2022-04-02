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
      console.log(state.monthIndex)
    },
    decrement: function (state, action) {
      state.monthIndex = state.monthIndex - 1;
    },
  },
});
export const { increment, decrement} = monthIndexSlice.actions;
export default monthIndexSlice.reducer;
