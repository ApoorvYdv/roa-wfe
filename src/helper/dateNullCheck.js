import dayjs from "dayjs";

export const dateNullCheck = (val) => {
  return val && dayjs(val).isValid() ? dayjs(val) : "";
};
