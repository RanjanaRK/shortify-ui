import ky from "ky";

let isRefreshing = false;
let refreshQueue: (() => void)[] = [];

const processQueue = () => {
  refreshQueue.forEach((cb) => cb());
  refreshQueue = [];
};

export const kyClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL!,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
  retry: 0,
  hooks: {
    afterResponse: [
      async (request, options, response) => {
        if (response.status !== 401) return response;

        // prevent infinite refresh loop
        if (request.url.includes("/auth/refresh")) {
          return response;
        }

        if (isRefreshing) {
          await new Promise<void>((resolve) => refreshQueue.push(resolve));
          return kyClient(request, options);
        }

        isRefreshing = true;

        try {
          await kyClient.post("auth/refresh");
          processQueue();
          return kyClient(request, options);
        } catch (err) {
          refreshQueue = [];
          throw err;
        } finally {
          isRefreshing = false;
        }
      },
    ],
  },
});
