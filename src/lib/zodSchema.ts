import z from "zod";

export const urlFormSchema = z.object({
  originalUrl: z.string(),
  //   shortCode: z.string(),
});
