// import { kyClient } from "@/lib/ky/kyClient";
// import { GetUrlsResponse } from "@/lib/types";
// import { HTTPError } from "ky";

// const useUserActivity = async (): Promise<GetUrlsResponse> => {
//   try {
//     // const token = (await cookies()).get("access_token")?.value;
//     // const anontoken = (await cookies()).get("anon-id")?.value;

//     const response = await kyClient
//       .get("api/activity", {
//         // headers: {
//         //   Authorization: `Bearer ${token}`,
//         // },
//       })
//       .json<GetUrlsResponse>();

//     return response;
//   } catch (error) {
//     if (error instanceof HTTPError) {
//       const errorBody = await error.response.json<{ message?: string }>();

//       return {
//         success: false,
//         count: 0,
//         data: [],
//         message: errorBody.message || "Failed to fetch activity",
//       };
//     }

//     return {
//       success: false,
//       count: 0,
//       data: [],
//       message: "Something went wrong. Please try again.",
//     };
//   }
// };

// export default useUserActivity;

"use client";

import { useEffect, useState } from "react";
import { kyClient } from "@/lib/ky/kyClient";
import { GetUrlsResponse } from "@/lib/types";
import { HTTPError } from "ky";

const useUserActivity = () => {
  const [data, setData] = useState<GetUrlsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivity = async () => {
      try {
        const response = await kyClient
          .get("api/activity")
          .json<GetUrlsResponse>();

        setData(response);
      } catch (error) {
        if (error instanceof HTTPError) {
          const errorBody = await error.response.json<{ message?: string }>();

          setData({
            success: false,
            count: 0,
            data: [],
            message: errorBody.message || "Failed to fetch activity",
          });
        } else {
          setData({
            success: false,
            count: 0,
            data: [],
            message: "Something went wrong",
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchActivity();
  }, []);

  return { data, loading };
};

export default useUserActivity;

// // "use client";

// // import { useQuery } from "@tanstack/react-query";
// // import { kyClient } from "@/lib/ky/kyClient";
// // import { GetUrlsResponse } from "@/lib/types";
// // import { HTTPError } from "ky";

// // const fetchUserActivity = async (): Promise<GetUrlsResponse> => {
// //   try {
// //     return await kyClient.get("api/activity").json<GetUrlsResponse>();
// //   } catch (error) {
// //     if (error instanceof HTTPError) {
// //       const errorBody = await error.response.json<{ message?: string }>();

// //       return {
// //         success: false,
// //         count: 0,
// //         data: [],
// //         message: errorBody.message || "Failed to fetch activity",
// //       };
// //     }

// //     return {
// //       success: false,
// //       count: 0,
// //       data: [],
// //       message: "Something went wrong",
// //     };
// //   }
// // };

// // const useUserActivity = () => {
// //   return useQuery({
// //     queryKey: ["user-activity"],
// //     queryFn: fetchUserActivity,

// //     // Optional but recommended
// //     staleTime: 1000 * 30, // 30 seconds
// //     retry: false, // don't retry on auth errors
// //   });
// // };

// // export default useUserActivity;
