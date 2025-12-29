import { kyServer } from "@/lib/ky/kyServer";
import { GetUrlsResponse } from "@/lib/types";
import { HTTPError } from "ky";
import { cookies } from "next/headers";

const useUserActivity = async (): Promise<GetUrlsResponse> => {
  try {
    const token = (await cookies()).get("access-token")?.value;
    const anontoken = (await cookies()).get("anon-id")?.value;

    if (!token) {
      return {
        success: false,
        count: 0,
        data: [],
        message: "Unauthorized",
      };
    }

    const response = await kyServer
      .get("api/activity", {
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        credentials: "include",
      })
      .json<GetUrlsResponse>();

    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorBody = await error.response.json<{ message?: string }>();

      return {
        success: false,
        count: 0,
        data: [],
        message: errorBody.message || "Failed to fetch activity",
      };
    }

    return {
      success: false,
      count: 0,
      data: [],
      message: "Something went wrong. Please try again.",
    };
  }
};

export default useUserActivity;
