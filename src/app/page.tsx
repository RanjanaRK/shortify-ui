import ActivityPage from "@/components/ActivityList";
import UrlShortenDispaly from "@/components/UrlShortenDispaly";

const page = async () => {
  return (
    <>
      <div className="grid h-[90dvh] place-items-center">
        <UrlShortenDispaly />
        {/* <UserProfile /> */}
        <ActivityPage />
      </div>
    </>
  );
};

export default page;
