// hooks/url/useUrlShorten.ts
import { kyClient } from "@/lib/ky/kyClient";
import { MessageResponse, UrlFormSchemaType } from "@/lib/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { HTTPError } from "ky";

export const useUrlShort = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (urlData: UrlFormSchemaType) => {
      try {
        const response = await kyClient.post("api/urlShort", {
          json: { originalUrl: urlData.originalUrl },
        });

        return await response.json<MessageResponse>();
      } catch (error) {
        if (error instanceof HTTPError) {
          const body = await error.response.json<{ message?: string }>();
          throw new Error(body.message || "Failed to shorten URL");
        }
        throw new Error("Something went wrong");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-activity"] });
    },
  });
};
