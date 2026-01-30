"use client";

import { useCurrentUser } from "@/hooks/useUser";
import AuthButton from "./Header/AuthButton";
import UserProfile from "./UserProfile";

const ActivityClient = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return null;
  if (!user) return <AuthButton />;

  return <UserProfile user={user} />;
};

export default ActivityClient;
