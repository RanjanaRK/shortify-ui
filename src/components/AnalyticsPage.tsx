"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import { getUrlAnalytics } from "@/lib/api/getUrlAnalytics";

const DEMO_ANALYTICS = {
  totalClicks: 25,
  browserStats: [
    { _id: "Chrome", count: 14 },
    { _id: "Firefox", count: 6 },
    { _id: "Edge", count: 5 },
  ],
  deviceStats: [
    { _id: "desktop", count: 18 },
    { _id: "mobile", count: 7 },
  ],
  recentClicks: [
    { browser: "Chrome", device: "desktop", referer: "direct" },
    { browser: "Firefox", device: "mobile", referer: "linkedin.com" },
  ],
};

type Props = {
  urlId: string | null;
  //   onClose: () => void;
};

const UrlAnalyticsModal = ({ urlId }: Props) => {
  const [data, setData] = useState<any>(DEMO_ANALYTICS);
  const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     if (!urlId) return;

  //     setLoading(true);
  //     getUrlAnalytics(urlId)
  //       .then((res:any) => res && setData(res))
  //       .finally(() => setLoading(false));
  //   }, [urlId]);

  //   if (!urlId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-3xl rounded-xl bg-white p-6"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">URL Analytics</h2>
          {/* <button onClick={onClose}>✕</button> */}
        </div>

        {loading && (
          <p className="text-sm text-gray-400">Loading real analytics…</p>
        )}

        <div className="space-y-4">
          <p>
            <strong>Total Clicks:</strong> {data.totalClicks}
          </p>

          <div>
            <h3 className="font-medium">Browsers</h3>
            {data.browserStats.map((b: any) => (
              <p key={b._id}>
                {b._id}: {b.count}
              </p>
            ))}
          </div>

          <div>
            <h3 className="font-medium">Devices</h3>
            {data.deviceStats.map((d: any) => (
              <p key={d._id}>
                {d._id}: {d.count}
              </p>
            ))}
          </div>

          <div>
            <h3 className="font-medium">Recent Clicks</h3>
            {data.recentClicks.map((c: any, i: number) => (
              <p key={i} className="text-muted-foreground text-sm">
                {c.browser} • {c.device} • {c.referer}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UrlAnalyticsModal;
