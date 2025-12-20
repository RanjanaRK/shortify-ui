import { kyClient } from "@/lib/ky/kyClient";
import { MessageResponse, UrlFormSchemaType } from "@/lib/types";
import { HTTPError } from "ky";

const useUrlShorten = async (urlData: UrlFormSchemaType) => {
  try {
    const response = await kyClient.post("api/urlShort", {
      json: {
        originalUrl: urlData.originalUrl,
      },
    });

    const result = await response.json<MessageResponse>();
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

    /* Network / unexpected errors */
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};
export default useUrlShorten;
