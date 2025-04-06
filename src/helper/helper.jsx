import dayjs from "dayjs";
import toast from "react-hot-toast";

export const removeUnderscores = (str) =>
  str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" ");

export const downloadSignedUrl = async (signedUrl) => {
  window.open(signedUrl, "_blank");
};

export const downloadSignedUrlWithFilename = async (signedUrl, filename) => {
  try {
    const response = await fetch(signedUrl);
    const blob = await response.blob(); // Get the file as binary data
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename); // Force download with a filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Cleanup
    URL.revokeObjectURL(url);
  } catch (error) {
    toast.error("Error downloading file:", error);
  }
};
export const downloadFile = async (response, filename) => {
  let url;

  if (response.startsWith("https")) {
    downloadSignedUrl(response);
  } else {
    if (!filename) filename = "Docket.pdf";
    url = URL.createObjectURL(new Blob([response]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export const formatHearingDateTime = (date, time, room) => {
  return `${date} ${time}${room ? ` at ${room}` : ""}`;
};

export const fillDefaultFieldsFromTemplate = (source, template) => {
  const result = { ...template };
  if (!source) return result;

  for (const key in source) {
    if (source[key] !== null && source[key] !== "") {
      result[key] =
        typeof source[key] === "number" ? source[key].toString() : source[key];
    }
  }

  return result;
};

export const getFileNameFromS3URL = (url) => {
  return new URL(url).pathname.split("/").pop();
};

export const formatFee = (val) => Number(val).toFixed(2);

export const getFileExtension = (filename) => {
  return filename.slice(((filename.lastIndexOf(".") - 1) >>> 0) + 2);
};
