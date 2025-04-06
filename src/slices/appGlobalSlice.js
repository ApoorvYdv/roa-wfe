import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../redux/initialState";
import { departmentQuery } from "../query/utils/departmentQuery";
import { toast } from "react-hot-toast";

export const appGlobalsSlice = createSlice({
  name: "appGlobals",
  initialState: initialState.appGlobals,
  reducers: {
    setUrlConfig: (state, action) => {
      state.urlConfig = { ...action.payload };
    },
    switchSidebar: (state, action) => {
      state.isSidebarCollapsed = action.payload;
    },
    closeSubmissionModal: (state, action) => {
      state.isSubmissionModalOpen = false;
    },
    setSubmissionModalData: (state, action) => {
      const { type, headerText, subText, key, body, requestType } =
        action.payload;
      state.submissionModalData.type = type;
      state.submissionModalData.headerText = headerText;
      state.submissionModalData.subText = subText;
      if (action) {
        state.submissionModalData.key = key;
        state.submissionModalData.body = { ...body };
        state.submissionModalData.requestType = requestType;
      }
      state.isSubmissionModalOpen = true;
    },
    setBackdropLoading: (state, action) => {
      state.isBackdropLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        departmentQuery.endpoints.fetchDepartments.matchFulfilled,
        (state, { payload }) => {
          state.availableDepartments = payload;
        }
      )
      .addMatcher(
        departmentQuery.endpoints.fetchDepartments.matchRejected,
        (state, { payload }) => {
          toast.error("Unable to Fetch Departments. Please Try Again");
        }
      );
  },
});

export const {
  switchSidebar,
  setUrlConfig,
  closeSubmissionModal,
  setSubmissionModalData,
  setBackdropLoading,
} = appGlobalsSlice.actions;
export const appGlobalsReducer = appGlobalsSlice.reducer;
