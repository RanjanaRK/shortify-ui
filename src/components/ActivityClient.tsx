"use client";

import { useUserUrls } from "@/hooks/useUser";
import UserLinks from "./UserLinks";

const ActivityClient = () => {
  const { data: urls, isLoading, isError } = useUserUrls();

  if (isLoading) return <p>Loading activity...</p>;
  if (isError || !urls?.success) return <p>Login to see your activity</p>;

  return <UserLinks urls={urls} />;
};

export default ActivityClient;
