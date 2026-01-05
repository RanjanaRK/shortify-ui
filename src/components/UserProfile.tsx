"use client";

import { User } from "@/lib/types";
import LogoutButton from "./Auth/LogoutButton";

const UserProfile = ({ user }: { user: User }) => {
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
