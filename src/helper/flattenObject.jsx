export function flattenObject(obj) {
  const result = {};

  for (const key in obj) {
    if (key === "charges") {
      result[key] = obj[key];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(result, flattenObject(obj[key]));
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}
