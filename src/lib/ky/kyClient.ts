import ky, { HTTPError } from "ky";

export const kyClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL!,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
  retry: 0,
  hooks: {
    beforeRetry: [
      async ({ error, retryCount }) => {
        if (
          error instanceof HTTPError &&
          error.response?.status === 401 &&
          retryCount === 0
        ) {
          await ky.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
            credentials: "include",
          });
        }
      },
    ],
  },
});
