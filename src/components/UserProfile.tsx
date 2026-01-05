"use client";

import useUser from "@/hooks/user/useUser ";
import LogoutButton from "./Auth/LogoutButton";
import { User } from "@/lib/types";
import { use } from "react";

const UserProfile = ({ user }: { user: User }) => {
  // const { user, loading } = useUser();

  // if (loading) return <p>Loading...</p>;
  // if (!user) return <p>Unauthorized</p>;

  return (
    <>
      <div className="">
        <h1>Hello {user.name}</h1>
      </div>
      <LogoutButton />
    </>
  );
};

export default UserProfile;
