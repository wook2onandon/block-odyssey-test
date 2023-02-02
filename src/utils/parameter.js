export const getParameter = (key) => {
  return new URLSearchParams(window.location.search).get(key);
};
