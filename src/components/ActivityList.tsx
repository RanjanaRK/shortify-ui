"use client";

import UserLinks from "@/components/UserLinks";
import useUserActivity from "@/hooks/user/useUserActivity";

const ActivityPage = () => {
  const { data, loading } = useUserActivity();

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return <UserLinks urls={data} />;
};

export default ActivityPage;
