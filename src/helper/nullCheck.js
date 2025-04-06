export const nullToValue = (body, key) => {
  if (body && body[key]) {
    return body[key];
  }

  return "";
};

export const nullToValueNested = (body, key1, key2) => {
  if (body && body[key1] && body[key1][key2]) {
    return body[key1][key2];
  }

  return "";
};
