import { kyServer } from "@/lib/ky/kyServer";
import { HTTPError } from "ky";

const useGetShortUrl = async (userId: string) => {
  try {
    const response = await kyServer.get("api/:userId").json();
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

export default useGetShortUrl;
