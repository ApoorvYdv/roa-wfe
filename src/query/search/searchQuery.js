import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customAxios } from "../../external/customAxios";
import { customBaseQueryWithReauth } from "../utils/customBaseQuery";
import dayjs from "dayjs";

export const searchQuery = createApi({
  reducerPath: "searchQuery",
  baseQuery: customBaseQueryWithReauth("/v1/case_management"),
  endpoints: (builder) => ({
    fetchCaseRecords: builder.query({
      query: (body) => ({
        url: "/search",
        method: "POST",
        body: body,
      }),
      providesTags: ["FETCH_CASE_RECORDS"],
    }),
    fetchALLCaseRecords: builder.query({
      query: () => ({
        url: "/fetch_all_cases",
        method: "GET",
      }),
      providesTags: ["FETCH_ALL_CASE_RECORDS"],
    }),
    fetchCaseRecord: builder.query({
      query: (caseNumber) => ({
        method: "GET",
        url: `/case/${caseNumber}`,
      }),
      providesTags: ["FETCH_CASE_RECORD"],
    }),
    createCase: builder.mutation({
      query: (body) => ({
        method: "POST",
        body: body,
        url: "/register_case",
      }),
      invalidatesTags: (result, error, id) =>
        result ? ["FETCH_CASE_RECORDS"] : ["CREATE_CASE_REJECTED"],
    }),
  }),
});

export const {
  useFetchCaseRecordsQuery,
  useLazyFetchCaseRecordsQuery,
  useFetchCaseRecordQuery,
  useCreateCaseMutation,
} = searchQuery;
