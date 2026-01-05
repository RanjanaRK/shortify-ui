// lib/api/user.server.ts
import { cookies } from "next/headers";
import "server-only";
import { GetUrlsResponse, ShortUrl } from "../types";

export const getCurrentUserServer = async () => {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch(`${process.env.API_URL}/api/me`, {
    headers: {
      Cookie: cookieHeader,
    },
    cache: "no-store",
    credentials: "include",
  });
  const data = await res.json();
  console.log(data);

  if (!res.ok) return null;
  return data;
};

export const getUserUrlLinks = async () => {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch(`${process.env.API_URL}/api/activity`, {
    headers: {
      Cookie: cookieHeader,
    },
    cache: "no-store",
    credentials: "include",
  });
  const data = await res.json();
  console.log(data);

  if (!res.ok) return null;
  return data;
};
