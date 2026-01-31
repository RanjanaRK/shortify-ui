"use client";

import { kyClient } from "@/lib/ky/kyClient";
import {
  ApiResponse,
  GenerateQrResponse,
  MessageResponse,
  UrlFormSchemaType,
} from "@/lib/types";
import { HTTPError } from "ky";

export const UrlShorten = async (
  urlData: UrlFormSchemaType,
): Promise<ApiResponse<MessageResponse>> => {
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

export const generateQrCode = async (
  originalUrl: string,
): Promise<ApiResponse<GenerateQrResponse>> => {
  try {
    const response = await kyClient.post("api/qr/generate", {
      json: { originalUrl },
    });

    const result = await response.json<GenerateQrResponse>();

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
