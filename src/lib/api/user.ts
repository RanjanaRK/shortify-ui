import { kyClient } from "@/lib/ky/kyClient";
import { GetUrlsResponse, User } from "@/lib/types";
import { HTTPError } from "ky";

export const getCurrentUser = async (): Promise<User> => {
  const res = await kyClient.get("api/me").json<User>();
  console.log(res);

  return res;
};

export const fetchUserActivity = async (): Promise<GetUrlsResponse> => {
  try {
    return await kyClient.get("api/activity").json<GetUrlsResponse>();
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
    throw error;
  }
};
