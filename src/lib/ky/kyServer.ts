import ky from "ky";
const baseUrl = process.env.API_URL;
export const kyServer = ky.create({
  prefixUrl: baseUrl,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
});
