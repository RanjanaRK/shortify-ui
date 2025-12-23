import UrlShortenDispaly from "@/components/UrlShortenDispaly";
import useGetShortUrl from "@/hooks/url/useGetShortUrl";
import { useGetCurrentUser } from "@/hooks/user/useGetCurrentUser";
import useUserActivity from "@/hooks/user/useUserActivity";

const page = async () => {
  const userurl = await useUserActivity();
  console.log(userurl);
  const user = await useGetCurrentUser();
  console.log(user);

  // const abc = user?._id;

  // if (!user?._id) {
  //   return;
  // }
  // const data = await useGetShortUrl(user!._id);

  return (
    <>
      <div className="grid h-[90dvh] place-items-center">
        <UrlShortenDispaly />
      </div>
    </>
  );
};

export default page;
