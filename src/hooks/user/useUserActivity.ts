import { kyServer } from "@/lib/ky/kyServer";
import { HTTPError } from "ky";
import { cookies } from "next/headers";

const useUserActivity = async () => {
  try {
    const token = (await cookies()).get("jwt-token")?.value;
    const anonToken = (await cookies()).get("anon-id")?.value;

    if (!token) return null;

    const response = await kyServer
      .get("api/activity", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .json();

    return response;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorBody = await error.response.json<{ message?: string }>();

      return {
        success: false,
        message: errorBody.message || "Login failed",
      };
    }

    /* Network / unexpected errors */
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};

export default useUserActivity;
