import { kyClient } from "@/lib/ky/kyClient";
import { LoginFormSchemaType, LoginResponse } from "@/lib/types";
import { HTTPError } from "ky";

const useLogin = async (loginData: LoginFormSchemaType) => {
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

export default useLogin;
