export const currentPage = () => {
  return window.location.pathname.split("/")[
    window.location.pathname.split("/").length - 1
  ];
};
export const getHostUrl = () => {
  return `${window.location.protocol}//${window.location.host}`;
};

export const returnRoute = (path) => {
  return path.split("/")[path.split("/").length - 1];
};
