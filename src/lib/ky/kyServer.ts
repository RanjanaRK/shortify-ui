// import ky from "ky";

// export const kyServer = ky.create({
//   prefixUrl: process.env.API_URL,
//   credentials: "include",
//   mode: "cors",
//   cache: "no-store",
// });

// lib/ky/kyServer.ts
import ky from "ky";
import { cookies } from "next/headers";

export const kyServer = ky.create({
  credentials: "include",
  hooks: {
    beforeRequest: [
      (request) => {
        const cookieStore = cookies();

        request.headers.set(
          "cookie",
          cookieStore
            .get()
            .map((c) => `${c.name}=${c.value}`)
            .join("; "),
        );
      },
    ],
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          // call refresh API
          await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/refresh`, {
            method: "POST",
            headers: {
              cookie: cookies()
                .get()
                .map((c) => `${c.name}=${c.value}`)
                .join("; "),
            },
          });

          // retry original request
          return ky(request);
        }
      },
    ],
  },
});
