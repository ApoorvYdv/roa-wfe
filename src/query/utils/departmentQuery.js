import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { customBaseQueryWithReauth } from "./customBaseQuery";

export const departmentQuery = createApi({
  reducerPath: "departmentQuery",
  baseQuery: customBaseQueryWithReauth("/v1/department_management"),
  endpoints: (builder) => ({
    fetchDepartments: builder.query({
      query: () => ({
        method: "GET",
      }),
      providesTags: ["FETCH_DEPARTMENTS"],
    }),
  }),
});

export const { useFetchDepartmentsQuery } = departmentQuery;
