"use client";

import { useClickanalytics } from "@/hooks/useUser";
import UrlAnalytics from "./UrlAnalytics";

interface Props {
  slug: string;
}

const ClickAnalyticsMain = ({ slug }: Props) => {
  const { data, isLoading } = useClickanalytics(slug);

  if (isLoading) {
    return <p className="p-6">Loading analytics...</p>;
  }

  if (!data) {
    return null;
  }

  return <UrlAnalytics data={data} />;
};

export default ClickAnalyticsMain;
