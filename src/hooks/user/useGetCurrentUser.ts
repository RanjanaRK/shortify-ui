// "use server";

import { kyServer } from "@/lib/ky/kyServer";
import { User } from "@/lib/types";
import { cookies } from "next/headers";

// import { kyServer } from "@/lib/ky/kyServer";
// import { User } from "@/lib/types";
// import { cookies } from "next/headers";

// const useGetCurrentUser = async (): Promise<User | null> => {
//   try {
//     const token = (await cookies()).get("jwt-token")?.value;

//     const response = await kyServer
//       .get("api/me", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .json<User>();

//     console.log(response);

//     return response;
//   } catch (error) {}
// };

// export default useGetCurrentUser;

export const useGetCurrentUser = async (): Promise<User | null> => {
  try {
    const token = (await cookies()).get("access_token")?.value;

    if (!token) return null;

    const response = await kyServer
      .get("api/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .json<User>();

    return response;
  } catch (error) {
    return null;
  }
};
