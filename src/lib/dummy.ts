// lib/dummy-analytics.ts
export const DUMMY_ANALYTICS = {
  url: "https://example.com",
  totalClicks: 42,

  dailyClicks: [
    { _id: "Mon", count: 4 },
    { _id: "Tue", count: 6 },
    { _id: "Wed", count: 8 },
    { _id: "Thu", count: 10 },
    { _id: "Fri", count: 14 },
  ],

  browserStats: [
    { _id: "Chrome", count: 28 },
    { _id: "Firefox", count: 8 },
    { _id: "Edge", count: 6 },
  ],

  deviceStats: [
    { _id: "Desktop", count: 30 },
    { _id: "Mobile", count: 12 },
  ],

  osStats: [
    { _id: "Windows", count: 20 },
    { _id: "Android", count: 12 },
    { _id: "macOS", count: 10 },
  ],

  recentClicks: [
    {
      _id: "1",
      browser: "Chrome",
      device: "Desktop",
      os: "Windows",
      referrer: "direct",
    },
    {
      _id: "2",
      browser: "Mobile Chrome",
      device: "Mobile",
      os: "Android",
      referrer: "linkedin.com",
    },
    {
      _id: "3",
      browser: "Chrome",
      device: "Desktop",
      os: "macOS",
      referrer: "google.com",
    },
  ],
};
