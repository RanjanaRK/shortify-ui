import ky from "ky";

export const kyServer = ky.create({
  prefixUrl: "https://shortify-api-ltue.onrender.com/",
  credentials: "include",
  mode: "cors",
  cache: "no-store",
});
