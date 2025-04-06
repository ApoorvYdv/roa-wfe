import axios from "axios";
import Cookies from "js-cookie";
import { getClientName, getCognitoAccessToken } from "../helper/cookieDecoder";

export const customAxios = axios.create({
  baseURL: "",
  headers: {
    Authorization: `Bearer ${getCognitoAccessToken()}`,
    client: getClientName(),
  },
});
