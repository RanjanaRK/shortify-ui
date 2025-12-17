import z from "zod";
import { loginFormSchema, signUpFormSchema, urlFormSchema } from "./zodSchema";

export type UrlFormSchemaType = z.infer<typeof urlFormSchema>;
export type LoginFormSchemaType = z.infer<typeof loginFormSchema>;
export type SignUpFormSchemaTypes = z.infer<typeof signUpFormSchema>;
