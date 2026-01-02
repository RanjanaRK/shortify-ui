import z from "zod";
import { loginFormSchema, signUpFormSchema, urlFormSchema } from "./zodSchema";

export type UrlFormSchemaType = z.infer<typeof urlFormSchema>;
export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
export type SignUpFormSchemaTypes = z.infer<typeof signUpFormSchema>;

export type LoginResponse = {
  message: string;
};
export type SignupResponse = {
  message: string;
};
export type MessageResponse = {
  message: string;
  shortUrl: string;
};

export type User = {
  user: { _id: string; name: string; email: string; createdAt: string };
};

export type ShortUrl = {
  _id: string;
  originalUrl: string;
  shortCode: string;
  createdBy: string | null;
  anonId: string | null;
  clicks: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type GetUrlsResponse = {
  success: boolean;
  count: number;
  data: ShortUrl[];
  message?: string;
};
