import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../redux/initialState";
import { currentPage } from "../helper/currentPage";

export const filtersSlice = createSlice({
  name: "filters",
  initialState: initialState.filters,
  reducers: {
    takeFilterInput: (state, action) => {
      const [name, value] = action.payload;
      const page = currentPage();
      state[page][name] = value;
    },
    toggleModal: (state, action) => {
      state.isFilterModalOpen = action.payload;
    },
    updatePrevFilters: (state, action) => {
      const page = currentPage();
      state.prevFilters = state[page];
    },
    setPrevFilters: (state, action) => {
      const page = currentPage();
      state[page] = state.prevFilters;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  takeFilterInput,
  toggleModal,
  updatePrevFilters,
  setPrevFilters,
} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
