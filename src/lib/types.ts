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
  _id: string;
  name: string;
  email: string;
  createdAt: string;
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

export interface UrlAnalyticsResponse {
  url: string;
  totalClicks: number;
  browserStats: CountByKey[];
  osStats: CountByKey[];
  deviceStats: CountByKey[];
  dailyClicks: CountByKey[];
  recentClicks: RecentClick[];
}

export interface CountByKey {
  _id: string;
  count: number;
}

export interface RecentClick {
  _id: string;
  ip: string;
  browser: string;
  os: string;
  device: string;
  referer?: string;
  createdAt?: string;
}

import { kyClient } from "@/lib/ky/kyClient";

export interface GenerateQrResponse {
  success: boolean;
  message: string;
  qr: string; // base64 or dataURL
  shortUrl: string;
  originalUrl: string;
}

export const generateQrCode = async (
  originalUrl: string,
): Promise<GenerateQrResponse> => {
  return kyClient
    .post("api/qr", {
      json: { originalUrl },
    })
    .json<GenerateQrResponse>();
};
