import { kyClient } from "@/lib/ky/kyClient";
import { LoginResponse } from "@/lib/types";
import { HTTPError } from "ky";

const uselogout = async () => {
  try {
    const result = await kyClient
      .post("/auth/logout", {})
      .json<LoginResponse>();

    return {
      success: true,
      message: result.message,
      data: result,
    };
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorBody = await error.response.json<{ message?: string }>();

      return {
        success: false,
        message: errorBody.message || "Login failed",
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};

export default uselogout;
