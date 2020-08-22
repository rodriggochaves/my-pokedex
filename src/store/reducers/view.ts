import { createSlice } from "@reduxjs/toolkit";

export enum ViewState {
  "IDLE",
  "LOADING",
}

export const viewSlice = createSlice({
  name: "view",
  initialState: ViewState.IDLE,
  reducers: {
    setViewToIdle: () => ViewState.IDLE,
    setViewToLoading: () => ViewState.LOADING,
  },
});

export const { setViewToIdle, setViewToLoading } = viewSlice.actions;

export default viewSlice.reducer;
