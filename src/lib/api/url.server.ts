import { kyClient } from "@/lib/ky/kyClient";
import { MessageResponse, UrlFormSchemaType } from "@/lib/types";
import ky, { HTTPError } from "ky";
// import { revalidatePath, revalidateTag } from "next/cache";

export const UrlShorten = async (urlData: UrlFormSchemaType) => {
  try {
    const response = await kyClient.post("api/urlShort", {
      json: {
        originalUrl: urlData.originalUrl,
      },
    });

    const result = await response.json<MessageResponse>();

    console.log(result);

    // revalidatePath("/");

    // revalidateTag("allurls", "default");
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
