import { kyClient } from "../ky/kyClient";
import { GetUrlsResponse, User } from "../types";
import { HTTPError } from "ky";

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const res = await kyClient
      .get("api/user/me", {
        timeout: 10000, // 10 seconds timeout
      })
      .json<{ user: User }>();

    return res.user ?? null;
  } catch (error) {
    if (error instanceof HTTPError) {
      // Server returned a non-2xx response
      console.error(
        "getCurrentUser HTTP error:",
        error.response.status,
        error.response.statusText,
      );
    } else {
      // Network or unexpected error
      console.error("getCurrentUser network error:", error);
    }
    return null;
  }
};

export const getUserUrlLinks = async (): Promise<GetUrlsResponse> => {
  try {
    const res = await kyClient
      .get("api/user/activity", {
        timeout: 10000,
      })
      .json<GetUrlsResponse>();

    return res;
  } catch (error) {
    if (error instanceof HTTPError) {
      console.error(
        "getUserUrlLinks HTTP error:",
        error.response.status,
        error.response.statusText,
      );
    } else {
      console.error("getUserUrlLinks network error:", error);
    }

    return {
      success: false,
      count: 0,
      data: [],
      message: "Failed to fetch user URLs",
    };
  }
};
