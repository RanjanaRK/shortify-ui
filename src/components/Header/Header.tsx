"use client";

import { useEffect, useState } from "react";
import { kyClient } from "@/lib/ky/kyClient";
import UserProfile from "../UserProfile";
import AuthButton from "./AuthButton";

const Header = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    kyClient
      .get("api/user/me")
      .json()
      .then((res: any) => {
        setUser(res.user ?? null);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  if (!user) return <AuthButton />;

  return <UserProfile user={user} />;
};

export default Header;
