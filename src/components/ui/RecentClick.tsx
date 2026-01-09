"use client";

// import { Badge } from "@/components/ui/badge";

export function RecentClicks({ clicks }: { clicks: any[] }) {
  if (!clicks.length) {
    return <p className="text-muted-foreground text-sm">No recent clicks</p>;
  }

  return (
    <div className="space-y-2">
      {clicks.map((click) => (
        <div
          key={click._id}
          className="flex items-center justify-between rounded-md border p-3 text-sm"
        >
          <div className="space-x-2">
            <div>{click.browser}</div>
            <div>{click.device}</div>
            <div>{click.os}</div>
          </div>
          <span className="text-muted-foreground">
            {click.referrer || "Direct"}
          </span>
        </div>
      ))}
    </div>
  );
}
