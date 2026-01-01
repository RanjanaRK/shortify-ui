import { kyClient } from "@/lib/ky/kyClient";
import { User } from "../types";

export const getCurrentUser = async (): Promise<User> => {
  return kyClient.get("api/me").json();
};
