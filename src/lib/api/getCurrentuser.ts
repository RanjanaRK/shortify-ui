import { kyClient } from "@/lib/ky/kyClient";
import { User } from "../types";

export const getCurrentUser = async (): Promise<User> => {
  const res = await kyClient.get("api/me").json<User>();
  console.log(res);

  return res;
};
