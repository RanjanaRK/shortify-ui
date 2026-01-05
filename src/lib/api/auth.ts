"use client";

import { HTTPError } from "ky";
import { kyClient } from "../ky/kyClient";
import { LoginFormSchemaType, LoginResponse } from "../types";

export const loginUser = async (loginData: LoginFormSchemaType) => {
  try {
    const res = await kyClient.post("auth/login", {
      json: {
        email: loginData.email,
        password: loginData.password,
      },
    });

    const result = await res.json<LoginResponse>();
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
