"use client";
import uselogout from "@/hooks/auth/uselogout";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await uselogout();

    if (result.success) {
      toast.success(result.message || "Logged out successfully");
      router.push("/");
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };
  return (
    <>
      <Button
        onClick={handleLogout}
        className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
