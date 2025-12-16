import z from "zod";
import { urlFormSchema } from "./zodSchema";

export type UrlFormSchemaType = z.infer<typeof urlFormSchema>;
