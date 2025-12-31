// "use client";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { GetUrlsResponse, ShortUrl } from "@/lib/types";
// import { kyClient } from "@/lib/ky/kyClient";

// export const useUrls = () => {
//   const queryClient = useQueryClient();

//   // Fetch URLs
//   const fetchUrls = useQuery<GetUrlsResponse, Error>(
//     ["urls"],
//     async () => kyClient.get("api/urls").json<GetUrlsResponse>(),
//     {
//       staleTime: 60 * 1000,
//     },
//   );

//   // Create URL mutation
//   const createUrl = useMutation(
//     async (originalUrl: string) => {
//       return kyClient
//         .post("api/shorten", { json: { url: originalUrl } })
//         .json<ShortUrl>();
//     },
//     {
//       // Optimistic update
//       onMutate: async (originalUrl: string) => {
//         await queryClient.cancelQueries(["urls"]);
//         const previous = queryClient.getQueryData<GetUrlsResponse>(["urls"]);

//         if (previous) {
//           queryClient.setQueryData<GetUrlsResponse>(["urls"], {
//             ...previous,
//             data: [
//               ...previous.data,
//               { id: "temp-id", originalUrl, shortCode: "loading", clicks: 0 },
//             ],
//             count: previous.count + 1,
//           });
//         }

//         return { previous };
//       },
//       onError: (_err, _newUrl, context: any) => {
//         if (context?.previous) {
//           queryClient.setQueryData(["urls"], context.previous);
//         }
//       },
//       onSettled: () => {
//         queryClient.invalidateQueries(["urls"]);
//       },
//     },
//   );

//   return { fetchUrls, createUrl };
// };
