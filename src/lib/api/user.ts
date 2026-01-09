import { kyClient } from "@/lib/ky/kyClient";
import { GetUrlsResponse, MessageResponse, User } from "@/lib/types";
import { HTTPError } from "ky";

export const deleteccount = async () => {
  try {
    const response = await kyClient.delete("api/user/delete-account");

    const result = await response.json<MessageResponse>();

    console.log(result);

    return {
      success: true,
      message: result.message,
    };
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
