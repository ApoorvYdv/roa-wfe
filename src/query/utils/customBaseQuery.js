import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCognitoAccessToken } from "../../helper/cookieDecoder";

const customBaseQuery = async (args, { getState }, extraOptions, endpoint) => {
  const state = getState();
  const baseUrl = state.appGlobals.urlConfig.apiEndpoint + endpoint; // Access the baseUrl from the Redux state
  const client = "lucknow";
  // Use fetchBaseQuery with the dynamic baseUrl
  const rawBaseQuery = fetchBaseQuery({
    baseUrl,
    headers: {
      Authorization: `Bearer ${getCognitoAccessToken()}`,
      client: client,
    },
  });

  return rawBaseQuery(args, { getState }, extraOptions);
};

export const customBaseQueryWithReauth =
  (endpoint) =>
  async (args, { getState }, extraOptions) => {
    const state = getState();
    let result = await customBaseQuery(
      args,
      { getState },
      extraOptions,
      endpoint
    );
    const client = state.appGlobals.userMetaData.client_name;
    if (
      result.error &&
      result.error.status === 401 &&
      getCognitoAccessToken() !== ""
    ) {
      window.location.href =
        state.appGlobals.urlConfig.forensic_evidence_management +
        "lucknow" +
        "?refresh=forensic_evidence_management";
    }
    return result;
  };
