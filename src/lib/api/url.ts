"use client";

import { kyClient } from "@/lib/ky/kyClient";
import {
  GenerateQrResponse,
  MessageResponse,
  UrlFormSchemaType,
} from "@/lib/types";
import { HTTPError } from "ky";

export const UrlShorten = async (urlData: UrlFormSchemaType) => {
  try {
    const response = await kyClient.post("api/urlShort", {
      json: {
        originalUrl: urlData.originalUrl,
      },
    });

    const result = await response.json<MessageResponse>();

    console.log(result);

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

export const generateQrCode = async (originalUrl: string) => {
  try {
    const response = await kyClient.post("api/qr/generate", {
      json: { originalUrl },
    });

    const result = await response.json<GenerateQrResponse>();

    console.log(result);

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
