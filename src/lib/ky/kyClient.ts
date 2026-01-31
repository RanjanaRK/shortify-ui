import ky from "ky";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const kyClient = ky.create({
  prefixUrl: baseUrl,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
  retry: 0,
});
