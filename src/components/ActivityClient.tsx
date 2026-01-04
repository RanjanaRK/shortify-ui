"use client";

import useUserActivity from "@/hooks/user/useClientActivity";
import UserLinks from "./UserLinks";

const ActivityClient = () => {
  const { data, isLoading } = useUserActivity();

  if (isLoading) return <p>Loading...</p>;
  if (!data?.success) return <p>{data?.message}</p>;

  return <UserLinks urls={data} />;
};

export default ActivityClient;
