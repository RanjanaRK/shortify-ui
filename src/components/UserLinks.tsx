"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { GetUrlsResponse } from "@/lib/types";

const UserLinks = ({ urls }: { urls: GetUrlsResponse }) => {
  const shortUrl = "https://tinyurl.com/f6et3az7";
  const originalUrl = "https://github.com/ai/nanoid#readme";

  if (!urls.success) {
    return <p>Login to see your activity</p>;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full rounded-xl border bg-white p-6 shadow-sm hover:shadow-md sm:w-2xl"
      >
        {urls.data?.map((url) => {
          return (
            <div
              className="flex flex-col gap-4 border-b md:flex-row md:items-center md:justify-between md:gap-40"
              key={url._id}
            >
              <div className="space-y-2">
                {/* <p className="text-muted-foreground text-sm">Original URL</p> */}
                <p className="truncate text-sm font-medium">
                  {url.originalUrl}
                </p>

                {/* <p className="text-muted-foreground text-sm">Short URL</p> */}
                <p className="truncate font-semibold text-sky-600">
                  {`${process.env.NEXT_PUBLIC_API_URL}/api/${url.shortCode}`}
                </p>
              </div>

              <div className="flex gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`${process.env.NEXT_PUBLIC_API_URL}/api/${url.shortCode}`}
                        target="_blank"
                        rel="noopener noreferrer"
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
                      //   onClick={}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="hover:bg-muted inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition"
                    >
                      Copy
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent>copy</TooltipContent>
                </Tooltip>
              </div>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default UserLinks;
