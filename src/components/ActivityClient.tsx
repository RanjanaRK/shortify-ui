"use client";

import { kyClient } from "@/lib/ky/kyClient";
import { GetUrlsResponse } from "@/lib/types";

import UserLinks from "./UserLinks";
import { useEffect, useState } from "react";

const ActivityClient = () => {
  const [urls, setUrls] = useState<GetUrlsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const data = await kyClient
          .get("api/user/activity")
          .json<GetUrlsResponse>();
        setUrls(data);
      } catch (err) {
        console.error(err);
        setUrls({
          success: false,
          data: [],
          count: 0,
          message: "Failed to fetch",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUrls();
  }, []);

  if (loading) return <p>Loading activity...</p>;
  if (!urls || !urls.success) return <p>Login to see your activity</p>;

  return <UserLinks urls={urls} />;
};

export default ActivityClient;
