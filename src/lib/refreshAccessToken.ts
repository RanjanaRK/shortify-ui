// lib/auth/refreshAccessToken.ts
import { kyServer } from "@/lib/ky/kyServer";
import { cookies } from "next/headers";

export const refreshAccessToken = async () => {
  const cookieStore = cookies();

  console.log((await cookieStore).toString);

  console.log((await cookieStore).get("refresh_token"));

  const res = await kyServer
    .post("auth/refresh", {
      headers: {
        cookie: cookieStore.toString(),
      },
    })
    .json<{ access_token: string }>();

  return res.access_token;
};
