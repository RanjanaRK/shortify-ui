import ky from "ky";

export const kyServer = ky.create({
  prefixUrl: process.env.API_URL,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
});
