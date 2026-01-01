import ky from "ky";

let isRefreshing = false;
let subscribers: (() => void)[] = [];

function onRefreshed() {
  subscribers.forEach((cb) => cb());
  subscribers = [];
}

export const kyClient = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL!,
  credentials: "include",
  mode: "cors",
  cache: "no-store",
  retry: 0,
  hooks: {
    afterResponse: [
      async (request, options, response) => {
        if (response.status !== 401) {
          return response;
        }

        // prevent infinite loop
        if (request.url.includes("/auth/refresh")) {
          throw response;
        }

        if (!isRefreshing) {
          isRefreshing = true;

          try {
            await kyClient.post("auth/refresh");
            onRefreshed();
          } catch (error) {
            subscribers = [];
            throw error;
          } finally {
            isRefreshing = false;
          }
        }

        // wait for refresh to finish
        await new Promise<void>((resolve) => {
          subscribers.push(resolve);
        });

        // ✅ retry original request (NO prefixUrl access)
        return ky(request, options);
      },
    ],
  },
});
