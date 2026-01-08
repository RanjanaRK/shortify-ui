"use client";

import { UrlAnalyticsResponse } from "@/lib/types";
import { motion } from "framer-motion";

type Props = {
  url: UrlAnalyticsResponse;
};

const UrlAnalyticsModal = ({ url }: Props) => {
  if (!url) {
    return <p className="text-sm text-gray-400">Loading analytics…</p>;
  }

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

        {/* <p className="text-sm text-gray-400">Loading real analytics…</p> */}

        <div className="space-y-4">
          <p>
            <strong>Total Clicks:</strong> {url.totalClicks}
          </p>

          <div>
            <h3 className="font-medium">Browsers</h3>
            {url.browserStats.map((b: any) => (
              <p key={b._id}>
                {b._id}: {b.count}
              </p>
            ))}
          </div>

          <div>
            <h3 className="font-medium">Devices</h3>
            {url.deviceStats.map((d: any) => (
              <p key={d._id}>
                {d._id}: {d.count}
              </p>
            ))}
          </div>

          <div>
            <h3 className="font-medium">Recent Clicks</h3>
            {url.recentClicks.map((c: any, i: number) => (
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
