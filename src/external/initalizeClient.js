import { createAsyncThunk } from "@reduxjs/toolkit";
import { customAxios } from "./customAxios";
import { getCognitoAccessToken } from "../helper/cookieDecoder";

export const initializeClient = createAsyncThunk(
  "initialize_client",
  async (token, { rejectWithValue, dispatch }) => {
    try {
      const res = await customAxios.get(`/v1/client/initialize_client`);
      const data = await res.data;
      return data;
    } catch (err) {
      const { status } = err;
      return rejectWithValue({ status: status });
    }
  }
);