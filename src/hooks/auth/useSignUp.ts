import { kyClient } from "@/lib/ky/kyClient";
import { SignUpFormSchemaTypes, SignupResponse } from "@/lib/types";
import { HTTPError } from "ky";

const useSignUp = async (signUpData: SignUpFormSchemaTypes) => {
  try {
    const response = await kyClient.post("auth/register", {
      json: {
        name: signUpData.name,
        email: signUpData.email,
        password: signUpData.password,
      },
    });

    const result = await response.json<SignupResponse>();

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

export default useSignUp;
