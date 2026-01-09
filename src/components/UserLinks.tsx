"use client";

import { GetUrlsResponse } from "@/lib/types";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Card, CardContent } from "./ui/card";

const UserLinks = ({ urls }: { urls: GetUrlsResponse }) => {
  const router = useRouter();

  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!urls.success) {
    return <p>Login to see your activity</p>;
  }

  const handleCopy = async (shortUrl: string, id: string) => {
    await navigator.clipboard.writeText(shortUrl);
    setCopiedId(id);

    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      <Card className="w-full">
        <CardContent className="p-6">
          {urls.data?.map((url, index) => {
            const shortUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/${url.shortCode}`;
            const isCopied = copiedId === url._id;

            return (
              <div
                key={url._id}
                className={` ${index !== urls.data.length - 1 ? "border-b" : ""} flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between`}
              >
                {/* Left */}
                <div className="space-y-2">
                  <p className="text-sm font-medium break-words">
                    {url.originalUrl}
                  </p>

                  <p className="truncate font-semibold text-sky-600">
                    {shortUrl}
                  </p>

                  <div
                    onClick={() => router.push(`analytics/${url._id}`)}
                    className="text-muted-foreground cursor-pointer text-xs hover:underline"
                  >
                    {url.clicks} clicks · View analytics
                  </div>
                </div>

                {/* Right */}
                <div className="flex gap-3">
                  <Link
                    href={shortUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit
                  </Link>

                  <button
                    onClick={() => handleCopy(shortUrl, url._id)}
                    className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium"
                  >
                    {isCopied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
      <div className="w-full rounded-xl border bg-white p-6 shadow-sm hover:shadow-md md:w-150 lg:w-200">
        {/* <div className="w-full rounded-xl border bg-white p-6 shadow-sm hover:shadow-md sm:w-2xl"> */}
        {urls.data?.map((url, index) => {
          const shortUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/${url.shortCode}`;
          const isCopied = copiedId === url._id;
          return (
            <div
              className={`${index !== urls.data.length - 1 ? "border-b" : ""} flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:gap-40`}
              key={url._id}
            >
              <div className="space-y-2">
                <p className="w-72 text-sm font-medium wrap-break-word">
                  {url.originalUrl}
                </p>

                <p className="truncate font-semibold text-sky-600">
                  {shortUrl}
                </p>
                <div
                  onClick={() => router.push(`analytics/${url._id}`)}
                  className="cursor-pointer text-xs text-gray-500 hover:text-sky-600 hover:underline"
                >
                  {url.clicks} clicks · View analytics
                </div>
              </div>

              <div className="flex gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={shortUrl}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Visit
                      </Link>
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent>Open short URL</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      onClick={() => handleCopy(shortUrl, url._id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="hover:bg-muted inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition"
                    >
                      {isCopied ? "Copied" : "Copy"}
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent>copy</TooltipContent>
                </Tooltip>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserLinks;
