import { HTTPError } from "ky";
import { cookies } from "next/headers";
import "server-only";
import { kyServer } from "../ky/kyServer";
import { GetUrlsResponse, UrlAnalyticsResponse } from "../types";

export const getCurrentUserServer = async () => {
  try {
    const cookieStore = await cookies();

    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(`${process.env.API_URL}/api/user/me`, {
      headers: {
        Cookie: cookieHeader,
      },
      next: { tags: ["currentUser"] },
    });

    const data = await res.json();

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

    const res = await kyServer(`api/user/activity`, {
      headers: {
        Cookie: cookieHeader,
      },
      next: { tags: [`allurls`] },
    });

    const data = await res.json<GetUrlsResponse>();

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

export const getUrlAnalytics = async (urlId: string) => {
  try {
    const cookieStore = await cookies();

    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await kyServer(`api/urls/analytics/${urlId}`, {
      headers: {
        Cookie: cookieHeader,
      },
      next: { tags: [`urlClicks`] },
    });

    const data = await res.json<UrlAnalyticsResponse>();

    console.log("Fetched analytics:", data);
    return data;
  } catch (error) {
    if (error instanceof HTTPError) {
      const body = await error.response.json<{ message?: string }>();
    }
    return null;
  }
};
