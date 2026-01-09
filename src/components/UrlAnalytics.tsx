"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UrlAnalyticsResponse } from "@/lib/types";
import { DailyClicksChart } from "./DailyClickChart";
import { RecentClicks } from "./ui/RecentClick";
import { StatsPieChart } from "./ui/StatsPieChart";

export default function AnalyticsDashboard({
  data,
}: {
  data: UrlAnalyticsResponse;
}) {
  return (
    <div className="space-y-6">
      <h1 className="text-background text-2xl font-bold md:text-3xl">
        URL Analytics
      </h1>
      <p className="text-muted-foreground md:text-2xl">{data.url}</p>

      {/* Total Clicks */}
      <Card>
        <CardHeader>
          <CardTitle>Total Clicks</CardTitle>
        </CardHeader>
        <CardContent className="text-4xl font-bold">
          {data.totalClicks}
        </CardContent>
      </Card>

      {/* Line Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Clicks Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <DailyClicksChart data={data.dailyClicks} />
        </CardContent>
      </Card>

      {/* Pie Charts */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Browsers</CardTitle>
          </CardHeader>
          <CardContent>
            <StatsPieChart data={data.browserStats} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <StatsPieChart data={data.deviceStats} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>OS</CardTitle>
          </CardHeader>
          <CardContent>
            <StatsPieChart data={data.osStats} />
          </CardContent>
        </Card>
      </div>

      {/* Recent Clicks */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Clicks</CardTitle>
        </CardHeader>
        <CardContent>
          <RecentClicks clicks={data.recentClicks} />
        </CardContent>
      </Card>
    </div>
  );
}
