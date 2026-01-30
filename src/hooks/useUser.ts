// src/hooks/useUser.ts
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser, getUserUrlLinks } from "@/lib/api/user.client";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
  });
};

export const useUserUrls = () => {
  return useQuery({
    queryKey: ["userUrls"],
    queryFn: getUserUrlLinks,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};
// export const useUrlMutation = (
//   mutationFn: (data: UrlFormSchemaType) => Promise<any>,
// ) => {
//   const queryClient = useQueryClient();

//   return useMutation<any, Error, UrlFormSchemaType>({
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries(["userUrls"]); // auto refresh
//     },
//   });
// };
