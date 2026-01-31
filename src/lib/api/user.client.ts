import { kyClient } from "../ky/kyClient";
import { GetUrlsResponse, UrlAnalyticsResponse, User } from "../types";
import { HTTPError } from "ky";

export const getCurrentUser = async () => {
  try {
    const res = await kyClient
      .get("api/user/me", {
        timeout: 10000, // 10 seconds timeout
      })
      .json<{ user: User }>();

    return res.user ?? null;
  } catch (error) {
    if (error instanceof HTTPError) {
      const body = await error.response.json<{ message?: string }>();
    }
    return null;
  }
};

export const getUserUrlLinks = async () => {
  try {
    const res = await kyClient
      .get("api/user/activity", {
        timeout: 10000,
      })
      .json<GetUrlsResponse>();

    return res;
  } catch (error) {
    if (error instanceof HTTPError) {
      const body = await error.response.json<{ message?: string }>();
    }
    return null;
  }
};

export const getUrlAnalytics = async ({ queryKey }: any) => {
  const [, urlId] = queryKey;
  try {
    const res = await kyClient(`api/urls/analytics/${urlId}`);

    const data = await res.json<UrlAnalyticsResponse>();

    return data;
  } catch (error) {
    if (error instanceof HTTPError) {
      const body = await error.response.json<{ message?: string }>();
    }
    return null;
  }
};
