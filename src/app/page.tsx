import UrlShortenDispaly from "@/components/UrlShortenDispaly";
import UserLinks from "@/components/UserLinks";
import UserProfile from "@/components/UserProfile";
import { useGetCurrentUser } from "@/hooks/user/useGetCurrentUser";
import useUserActivity from "@/hooks/user/useUserActivity";

const page = () => {
  return (
    <>
      <div className="grid h-[90dvh] place-items-center">
        <UrlShortenDispaly />

        <UserProfile />
      </div>
    </>
  );
};

export default page;
