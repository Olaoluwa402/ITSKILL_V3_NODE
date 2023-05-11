export const BASE_API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_APIURL_PROD
    : process.env.REACT_APP_APIURL_DEV;
