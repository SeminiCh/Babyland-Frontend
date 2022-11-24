/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const nannySlice = createSlice({
  name: "nanny",
  initialState: {
    availability: "available",
    nannyNic: " ",
  },
  reducers: {
    setNannyid: (state, action) => {
      state.nannyNic = action.payload.nannyNic;
    },
  },
});

export const { setNannyid } = nannySlice.actions;
export default nannySlice.reducer;
