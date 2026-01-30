"use client";

import { kyClient } from "@/lib/ky/kyClient";
import { useEffect } from "react";

const Refresh = () => {
  useEffect(() => {
    kyClient.post("auth/refresh").catch(() => {
      console.log("refresh failed");
    });
  }, []);

  return null;
};

export default Refresh;
