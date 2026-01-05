import ky from "ky";

// let isRefreshing = false;
// let subscribers: (() => void)[] = [];

// function onRefreshed() {
//   subscribers.forEach((cb) => cb());
//   subscribers = [];
// }

export const kyClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL!,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
  retry: 0,
});
