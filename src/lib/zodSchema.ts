import z, { email } from "zod";

export const urlFormSchema = z.object({
  originalUrl: z.string(),
  //   shortCode: z.string(),
});

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(30, { message: "Password must be at most 30 characters" }),
});

export const signUpFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(30, { message: "Password must be at most 30 characters" }),
});
