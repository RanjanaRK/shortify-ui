"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchUserActivity } from "@/lib/api/user";

export const useUserActivity = () => {
  return useQuery({
    queryKey: ["user-activity"],
    queryFn: fetchUserActivity,
    staleTime: 30_000,
  });
};

export default useUserActivity;
