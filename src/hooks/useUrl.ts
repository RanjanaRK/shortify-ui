import { generateQrCode, UrlShorten } from "@/lib/api/url";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useShortenUrl = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UrlShorten,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userUrls"] });
    },
    retry: false,
  });
};

export const useQrUrl = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: generateQrCode,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userUrls"] });
    },
    retry: false,
  });
};
