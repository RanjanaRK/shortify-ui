import { kyClient } from "@/lib/ky/kyClient";
import { MessageResponse } from "@/lib/types";
import { HTTPError } from "ky";

export const deleteAccount = async () => {
  try {
    const response = await kyClient.delete("api/user/deleteAccount");

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
