import ky from "ky";

export const kyClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL!,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
  retry: 0,
});
