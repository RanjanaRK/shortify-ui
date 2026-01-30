"use client";

import { kyClient } from "@/lib/ky/kyClient";
import { UrlAnalyticsResponse } from "@/lib/types";
import { useEffect, useState } from "react";
import AnalyticsDashboard from "./UrlAnalytics";

interface Props {
  slug: string;
}

const AnalyticsPageClient = ({ slug }: Props) => {
  const [data, setData] = useState<UrlAnalyticsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const res = await kyClient
          .get(`api/urls/analytics/${slug}`)
          .json<UrlAnalyticsResponse>();
        setData(res);
      } catch (err) {
        console.error(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [slug]);

  if (loading) return <p className="p-6">Loading analytics...</p>;
  if (!data)
    return (
      <div className="p-6">
        <h1 className="text-lg font-semibold text-red-500">
          Analytics not found or login required
        </h1>
      </div>
    );

  return <AnalyticsDashboard data={data} />;
};

export default AnalyticsPageClient;
