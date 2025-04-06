import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../redux/initialState";

export const exhibitTrackerSlice = createSlice({
  name: "exhibitTracker",
  initialState: initialState.exhibitTracker,
  reducers: {},
  extraReducers(builder) {},
});

export const {
  setExpandedExhibitTrackerCard,
  toggleIncomingPacketsModal,
  setTransferringExhibits,
} = exhibitTrackerSlice.actions;

export const exhibitTrackerReducer = exhibitTrackerSlice.reducer;
