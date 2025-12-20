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

export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}
