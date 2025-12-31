import { kyServer } from "@/lib/ky/kyServer";
import { headers } from "next/headers";

const useAuthRefresh = async (refreshToken: string) => {
  try {
    const res = await kyServer
      .post("auth/refresh", {
        headers: {
          Cookie: `refresh_token=${refreshToken}`,
        },
      })
      .json<{ access_token: string }>();

    return res.access_token;
  } catch (error) {
    console.log("refresh failed :", error);
    return null;
  }
};

export default useAuthRefresh;
