"use client";

import { useCurrentUser } from "@/hooks/useUser";
import UserProfile from "../UserProfile";
import AuthButton from "./AuthButton";

const Header = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) return null;
  if (!user) return <AuthButton />;

  return <UserProfile user={user} />;
};

export default Header;
