"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => {}}
        className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
