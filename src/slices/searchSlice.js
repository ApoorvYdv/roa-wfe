import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../redux/initialState";
import { toast } from "react-hot-toast";

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState.search,
  reducers: {},
  extraReducers: (builder) => {},
});

export const { prefillFields } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
