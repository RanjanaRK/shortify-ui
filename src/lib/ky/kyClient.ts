import ky, { HTTPError } from "ky";

export const kyClient = ky.create({
  prefixUrl: "https://shortify-api-ltue.onrender.com/",
  credentials: "include",
  mode: "cors",
  cache: "no-store",
  retry: 0,
});
