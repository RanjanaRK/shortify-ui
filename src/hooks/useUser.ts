import {
  getCurrentUser,
  getUrlAnalytics,
  getUserUrlLinks,
} from "@/lib/api/user.client";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    retry: false,
    refetchOnWindowFocus: false,
  });
};

export const useUserUrls = () => {
  return useQuery({
    queryKey: ["userUrls"],
    queryFn: getUserUrlLinks,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};

export const useClickanalytics = (urlId: string) => {
  return useQuery({
    queryKey: ["urlAnalytics", urlId],
    queryFn: getUrlAnalytics,
    enabled: !!urlId,
    staleTime: 0,
    refetchOnWindowFocus: false,
  });
};
