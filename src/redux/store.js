import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "../slices/searchSlice";
import { searchQuery } from "../query/search/searchQuery";
import { filtersReducer } from "../slices/filterSlice";
import { appGlobalsReducer } from "../slices/appGlobalSlice";

export const rootReducer = combineReducers({
  searchQuery: searchQuery.reducer,

  search: searchReducer,
  filters: filtersReducer,
  appGlobals: appGlobalsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(searchQuery.middleware),
  devTools: true,
});
