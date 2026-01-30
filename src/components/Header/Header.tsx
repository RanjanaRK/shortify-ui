"use client";

import { kyClient } from "@/lib/ky/kyClient";
import { User } from "@/lib/types";
import { useEffect, useState } from "react";
import UserProfile from "../UserProfile";
import AuthButton from "./AuthButton";

const Header = async () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await kyClient.get("api/user/me").json<{ user: User }>();
        setUser(res.user ?? null);
      } catch (err) {
        console.error(err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);
  if (loading) return null; // Or skeleton/header placeholder
  return user ? <UserProfile user={user} /> : <AuthButton />;
};

export default Header;
