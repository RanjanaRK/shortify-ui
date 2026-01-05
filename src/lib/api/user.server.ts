// lib/api/user.server.ts
import { cookies } from "next/headers";
import "server-only";
import { GetUrlsResponse, ShortUrl } from "../types";
import { kyServer } from "../ky/kyServer";
import { HTTPError } from "ky";

export const getCurrentUserServer = async () => {
  try {
    const cookieStore = await cookies();

    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(`${process.env.API_URL}/api/me`, {
      headers: {
        Cookie: cookieHeader,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Error fetching current user:", data);
      return null;
    }

    console.log("Current user:", data);
    return data;
  } catch (error) {
    if (error instanceof HTTPError) {
      const body = await error.response.json<{ message?: string }>();
      return {
        success: false,
        count: 0,
        data: [],
        message: body.message ?? "Failed",
      };
    }
  }
};

export const getUserUrlLinks = async () => {
  try {
    const cookieStore = await cookies();

    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await kyServer(`api/activity`, {
      headers: {
        Cookie: cookieHeader,
      },
      next: { tags: ["allurls"] },
    });

    const data = await res.json<GetUrlsResponse>();

    if (!res.ok) {
      console.error("Error fetching user URLs:", data);
      return null;
    }

    console.log("Fetched URLs:", data);
    return data;
  } catch (error) {
    if (error instanceof HTTPError) {
      const body = await error.response.json<{ message?: string }>();
      return {
        success: false,
        count: 0,
        data: [],
        message: body.message ?? "Failed",
      };
    }
    return null;
  }
};
