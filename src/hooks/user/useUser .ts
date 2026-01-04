"use client";

import { getCurrentUser } from "@/lib/api/user";
import { User } from "@/lib/types";
import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(setUser)
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
};

export default useUser;
